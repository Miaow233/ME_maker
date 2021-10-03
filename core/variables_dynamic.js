/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility functions for handling typed variables.
 *
 * @author duzc2dtw@gmail.com (Du Tian Wei)
 */
'use strict';

/**
 * Utility functions for handling typed variables.
 *
 * @namespace Blockly.VariablesDynamic
 */
goog.module('Blockly.VariablesDynamic');

const Msg = goog.require('Blockly.Msg');
const VariableModel = goog.require('Blockly.VariableModel');
const Variables = goog.require('Blockly.Variables');
/* eslint-disable-next-line no-unused-vars */
const Workspace = goog.requireType('Blockly.Workspace');
const xml = goog.require('Blockly.utils.xml');
const {Blocks} = goog.require('Blockly.blocks');


const onCreateVariableButtonClick_String = function(button) {
  Variables.createVariableButtonHandler(
      button.getTargetWorkspace(), undefined, 'String');
};
exports.onCreateVariableButtonClick_String = onCreateVariableButtonClick_String;

const onCreateVariableButtonClick_Number = function(button) {
  Variables.createVariableButtonHandler(
      button.getTargetWorkspace(), undefined, 'Number');
};
exports.onCreateVariableButtonClick_Number = onCreateVariableButtonClick_Number;

const onCreateVariableButtonClick_Colour = function(button) {
  Variables.createVariableButtonHandler(
      button.getTargetWorkspace(), undefined, 'Colour');
};
exports.onCreateVariableButtonClick_Colour = onCreateVariableButtonClick_Colour;

/**
 * Construct the elements (blocks and button) required by the flyout for the
 * variable category.
 * @param {!Workspace} workspace The workspace containing variables.
 * @return {!Array<!Element>} Array of XML elements.
 * @alias Blockly.VariablesDynamic.flyoutCategory
 */
const flyoutCategory = function(workspace) {
  let xmlList = [];
  let button = document.createElement('button');
  button.setAttribute('text', Msg['NEW_STRING_VARIABLE']);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_STRING');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', Msg['NEW_NUMBER_VARIABLE']);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_NUMBER');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', Msg['NEW_COLOUR_VARIABLE']);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_COLOUR');
  xmlList.push(button);

  workspace.registerButtonCallback(
      'CREATE_VARIABLE_STRING', onCreateVariableButtonClick_String);
  workspace.registerButtonCallback(
      'CREATE_VARIABLE_NUMBER', onCreateVariableButtonClick_Number);
  workspace.registerButtonCallback(
      'CREATE_VARIABLE_COLOUR', onCreateVariableButtonClick_Colour);


  const blockList = flyoutCategoryBlocks(workspace);
  xmlList = xmlList.concat(blockList);
  return xmlList;
};
exports.flyoutCategory = flyoutCategory;

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Workspace} workspace The workspace containing variables.
 * @return {!Array<!Element>} Array of XML block elements.
 * @alias Blockly.VariablesDynamic.flyoutCategoryBlocks
 */
const flyoutCategoryBlocks = function(workspace) {
  const variableModelList = workspace.getAllVariables();

  const xmlList = [];
  if (variableModelList.length > 0) {
    if (Blocks['variables_set_dynamic']) {
      const firstVariable = variableModelList[variableModelList.length - 1];
      const block = xml.createElement('block');
      block.setAttribute('type', 'variables_set_dynamic');
      block.setAttribute('gap', 24);
      block.appendChild(Variables.generateVariableFieldDom(firstVariable));
      xmlList.push(block);
    }
    if (Blocks['variables_get_dynamic']) {
      variableModelList.sort(VariableModel.compareByName);
      for (let i = 0, variable; (variable = variableModelList[i]); i++) {
        const block = xml.createElement('block');
        block.setAttribute('type', 'variables_get_dynamic');
        block.setAttribute('gap', 8);
        block.appendChild(Variables.generateVariableFieldDom(variable));
        xmlList.push(block);
      }
    }
  }
  return xmlList;
};
exports.flyoutCategoryBlocks = flyoutCategoryBlocks;
