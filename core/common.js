/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Common functions used both internally and externally, but which
 * must not be at the top level to avoid circular dependencies.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

/**
 * Common functions used both internally and externally, but which
 * must not be at the top level to avoid circular dependencies.
 * @namespace Blockly.common
 */
goog.module('Blockly.common');

/* eslint-disable-next-line no-unused-vars */
const Connection = goog.requireType('Blockly.Connection');
/* eslint-disable-next-line no-unused-vars */
const ICopyable = goog.requireType('Blockly.ICopyable');
/* eslint-disable-next-line no-unused-vars */
const Workspace = goog.requireType('Blockly.Workspace');
/* eslint-disable-next-line no-unused-vars */
const WorkspaceSvg = goog.requireType('Blockly.WorkspaceSvg');


/**
 * The main workspace most recently used.
 * Set by Blockly.WorkspaceSvg.prototype.markFocused
 * @type {!Workspace}
 */
let mainWorkspace;

/**
 * Returns the last used top level workspace (based on focus).  Try not to use
 * this function, particularly if there are multiple Blockly instances on a
 * page.
 * @return {!Workspace} The main workspace.
 * @alias Blockly.common.getMainWorkspace
 */
const getMainWorkspace = function() {
  return mainWorkspace;
};
exports.getMainWorkspace = getMainWorkspace;

/**
 * Sets last used main workspace.
 * @param {!Workspace} workspace The most recently used top level workspace.
 * @alias Blockly.common.setMainWorkspace
 */
const setMainWorkspace = function(workspace) {
  mainWorkspace = workspace;
};
exports.setMainWorkspace = setMainWorkspace;

/**
 * Currently selected block.
 * @type {?ICopyable}
 */
let selected = null;

/**
 * Returns the currently selected block.
 * @return {?ICopyable} The currently selected block.
 * @alias Blockly.common.getSelected
 */
const getSelected = function() {
  return selected;
};
exports.getSelected = getSelected;

/**
 * Sets the currently selected block.
 * @param {?ICopyable} newSelection The newly selected block.
 * @alias Blockly.common.setSelected
 */
const setSelected = function(newSelection) {
  selected = newSelection;
};
exports.setSelected = setSelected;

/**
 * Container element in which to render the WidgetDiv, DropDownDiv and Tooltip.
 * @type {?Element}
 */
let parentContainer;

/**
 * Get the container element in which to render the WidgetDiv, DropDownDiv and\
 * Tooltip.
 * @return {?Element} The parent container.
 * @alias Blockly.common.getParentContainer
 */
const getParentContainer = function() {
  return parentContainer;
};
exports.getParentContainer = getParentContainer;

/**
 * Set the parent container.  This is the container element that the WidgetDiv,
 * DropDownDiv, and Tooltip are rendered into the first time `Blockly.inject`
 * is called.
 * This method is a NOP if called after the first ``Blockly.inject``.
 * @param {!Element} newParent The container element.
 * @alias Blockly.common.setParentContainer
 */
const setParentContainer = function(newParent) {
  parentContainer = newParent;
};
exports.setParentContainer = setParentContainer;

/**
 * Size the SVG image to completely fill its container. Call this when the view
 * actually changes sizes (e.g. on a window resize/device orientation change).
 * See Blockly.resizeSvgContents to resize the workspace when the contents
 * change (e.g. when a block is added or removed).
 * Record the height/width of the SVG image.
 * @param {!WorkspaceSvg} workspace Any workspace in the SVG.
 * @alias Blockly.common.svgResize
 */
const svgResize = function(workspace) {
  let mainWorkspace = workspace;
  while (mainWorkspace.options.parentWorkspace) {
    mainWorkspace = mainWorkspace.options.parentWorkspace;
  }
  const svg = mainWorkspace.getParentSvg();
  const cachedSize = mainWorkspace.getCachedParentSvgSize();
  const div = svg.parentNode;
  if (!div) {
    // Workspace deleted, or something.
    return;
  }
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  if (cachedSize.width != width) {
    svg.setAttribute('width', width + 'px');
    mainWorkspace.setCachedParentSvgSize(width, null);
  }
  if (cachedSize.height != height) {
    svg.setAttribute('height', height + 'px');
    mainWorkspace.setCachedParentSvgSize(null, height);
  }
  mainWorkspace.resize();
};
exports.svgResize = svgResize;

/**
 * All of the connections on blocks that are currently being dragged.
 * @type {!Array<!Connection>}
 */
exports.draggingConnections = [];
