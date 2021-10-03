/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility functions for handling variable and procedure names.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Utility functions for handling variable and procedure names.
 * @class
 */
goog.module('Blockly.Names');

const Msg = goog.require('Blockly.Msg');
/* eslint-disable-next-line no-unused-vars */
const VariableMap = goog.requireType('Blockly.VariableMap');
const Variables = goog.require('Blockly.Variables');
/* eslint-disable-next-line no-unused-vars */
const Workspace = goog.requireType('Blockly.Workspace');
const internalConstants = goog.require('Blockly.internalConstants');
/** @suppress {extraRequire} */
goog.requireType('Blockly.Procedures');


/**
 * Class for a database of entity names (variables, procedures, etc).
 * @param {string} reservedWords A comma-separated string of words that are
 *     illegal for use as names in a language (e.g. 'new,if,this,...').
 * @param {string=} opt_variablePrefix Some languages need a '$' or a namespace
 *     before all variable names (but not procedure names).
 * @constructor
 * @alias Blockly.Names
 */
const Names = function(reservedWords, opt_variablePrefix) {
  this.variablePrefix_ = opt_variablePrefix || '';
  this.reservedDict_ = Object.create(null);
  if (reservedWords) {
    const splitWords = reservedWords.split(',');
    for (let i = 0; i < splitWords.length; i++) {
      this.reservedDict_[splitWords[i]] = true;
    }
  }
  this.reset();
};

/**
 * Constant to separate developer variable names from user-defined variable
 * names when running generators.
 * A developer variable will be declared as a global in the generated code, but
 * will never be shown to the user in the workspace or stored in the variable
 * map.
 */
Names.DEVELOPER_VARIABLE_TYPE = 'DEVELOPER_VARIABLE';

/**
 * When JavaScript (or most other languages) is generated, variable 'foo' and
 * procedure 'foo' would collide.  However, Blockly has no such problems since
 * variable get 'foo' and procedure call 'foo' are unambiguous.
 * Therefore, Blockly keeps a separate realm name to disambiguate.
 * getName('foo', 'VARIABLE') -> 'foo'
 * getName('foo', 'PROCEDURE') -> 'foo2'
 */

/**
 * Empty the database and start from scratch.  The reserved words are kept.
 */
Names.prototype.reset = function() {
  this.db_ = Object.create(null);
  this.dbReverse_ = Object.create(null);
  this.variableMap_ = null;
};

/**
 * Set the variable map that maps from variable name to variable object.
 * @param {!VariableMap} map The map to track.
 */
Names.prototype.setVariableMap = function(map) {
  this.variableMap_ = map;
};

/**
 * Get the name for a user-defined variable, based on its ID.
 * This should only be used for variables of realm
 * internalConstants.VARIABLE_CATEGORY_NAME.
 * @param {string} id The ID to look up in the variable map.
 * @return {?string} The name of the referenced variable, or null if there was
 *     no variable map or the variable was not found in the map.
 * @private
 */
Names.prototype.getNameForUserVariable_ = function(id) {
  if (!this.variableMap_) {
    console.warn(
        'Deprecated call to Names.prototype.getName without ' +
        'defining a variable map. To fix, add the following code in your ' +
        'generator\'s init() function:\n' +
        'Blockly.YourGeneratorName.nameDB_.setVariableMap(' +
        'workspace.getVariableMap());');
    return null;
  }
  const variable = this.variableMap_.getVariableById(id);
  if (variable) {
    return variable.name;
  }
  return null;
};

/**
 * Generate names for user variables, but only ones that are being used.
 * @param {!Workspace} workspace Workspace to generate variables from.
 */
Names.prototype.populateVariables = function(workspace) {
  const variables = Variables.allUsedVarModels(workspace);
  for (let i = 0; i < variables.length; i++) {
    this.getName(
        variables[i].getId(), internalConstants.VARIABLE_CATEGORY_NAME);
  }
};

/**
 * Generate names for procedures.
 * @param {!Workspace} workspace Workspace to generate procedures from.
 */
Names.prototype.populateProcedures = function(workspace) {
  let procedures =
      goog.module.get('Blockly.Procedures').allProcedures(workspace);
  // Flatten the return vs no-return procedure lists.
  procedures = procedures[0].concat(procedures[1]);
  for (let i = 0; i < procedures.length; i++) {
    this.getName(procedures[i][0], internalConstants.PROCEDURE_CATEGORY_NAME);
  }
};

/**
 * Convert a Blockly entity name to a legal exportable entity name.
 * @param {string} nameOrId The Blockly entity name (no constraints) or
 *     variable ID.
 * @param {string} realm The realm of entity in Blockly
 *     ('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).
 * @return {string} An entity name that is legal in the exported language.
 */
Names.prototype.getName = function(nameOrId, realm) {
  let name = nameOrId;
  if (realm == internalConstants.VARIABLE_CATEGORY_NAME) {
    const varName = this.getNameForUserVariable_(nameOrId);
    if (varName) {
      // Successful ID lookup.
      name = varName;
    }
  }
  const normalizedName = name.toLowerCase();

  const isVar = realm == internalConstants.VARIABLE_CATEGORY_NAME ||
      realm == Names.DEVELOPER_VARIABLE_TYPE;

  const prefix = isVar ? this.variablePrefix_ : '';
  if (!(realm in this.db_)) {
    this.db_[realm] = Object.create(null);
  }
  const realmDb = this.db_[realm];
  if (normalizedName in realmDb) {
    return prefix + realmDb[normalizedName];
  }
  const safeName = this.getDistinctName(name, realm);
  realmDb[normalizedName] = safeName.substr(prefix.length);
  return safeName;
};

/**
 * Return a list of all known user-created names in a specified realm.
 * @param {string} realm The realm of entity in Blockly
 *     ('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).
 * @return {!Array<string>} A list of Blockly entity names (no constraints).
 */
Names.prototype.getUserNames = function(realm) {
  const realmDb = this.db_[realm] || {};
  return Object.keys(realmDb);
};

/**
 * Convert a Blockly entity name to a legal exportable entity name.
 * Ensure that this is a new name not overlapping any previously defined name.
 * Also check against list of reserved words for the current language and
 * ensure name doesn't collide.
 * @param {string} name The Blockly entity name (no constraints).
 * @param {string} realm The realm of entity in Blockly
 *     ('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).
 * @return {string} An entity name that is legal in the exported language.
 */
Names.prototype.getDistinctName = function(name, realm) {
  let safeName = this.safeName_(name);
  let i = '';
  while (this.dbReverse_[safeName + i] ||
         (safeName + i) in this.reservedDict_) {
    // Collision with existing name.  Create a unique name.
    i = i ? i + 1 : 2;
  }
  safeName += i;
  this.dbReverse_[safeName] = true;
  const isVar = realm == internalConstants.VARIABLE_CATEGORY_NAME ||
      realm == Names.DEVELOPER_VARIABLE_TYPE;
  const prefix = isVar ? this.variablePrefix_ : '';
  return prefix + safeName;
};

/**
 * Given a proposed entity name, generate a name that conforms to the
 * [_A-Za-z][_A-Za-z0-9]* format that most languages consider legal for
 * variable and function names.
 * @param {string} name Potentially illegal entity name.
 * @return {string} Safe entity name.
 * @private
 */
Names.prototype.safeName_ = function(name) {
  if (!name) {
    name = Msg['UNNAMED_KEY'] || 'unnamed';
  } else {
    // Unfortunately names in non-latin characters will look like
    // _E9_9F_B3_E4_B9_90 which is pretty meaningless.
    // https://github.com/google/blockly/issues/1654
    //name = encodeURI(name.replace(/ /g, '_')).replace(/[^\w]/g, '_');
    name = name;
    // Most languages don't allow names with leading numbers.
    if ('0123456789'.indexOf(name[0]) != -1) {
      name = 'my_' + name;
    }
  }
  return name;
};

/**
 * Do the given two entity names refer to the same entity?
 * Blockly names are case-insensitive.
 * @param {string} name1 First name.
 * @param {string} name2 Second name.
 * @return {boolean} True if names are the same.
 */
Names.equals = function(name1, name2) {
  // name1.localeCompare(name2) is slower.
  return name1.toLowerCase() == name2.toLowerCase();
};

exports = Names;