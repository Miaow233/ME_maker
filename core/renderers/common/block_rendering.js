/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Namespace for block rendering functionality.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

/**
 * Namespace for block rendering functionality.
 * @namespace Blockly.blockRendering
 */
goog.module('Blockly.blockRendering');

const BottomRow = goog.require('Blockly.blockRendering.BottomRow');
const Connection = goog.require('Blockly.blockRendering.Connection');
const ConstantProvider = goog.require('Blockly.blockRendering.ConstantProvider');
const Debug = goog.require('Blockly.blockRendering.Debug');
const Drawer = goog.require('Blockly.blockRendering.Drawer');
const ExternalValueInput = goog.require('Blockly.blockRendering.ExternalValueInput');
const Field = goog.require('Blockly.blockRendering.Field');
const Hat = goog.require('Blockly.blockRendering.Hat');
const Icon = goog.require('Blockly.blockRendering.Icon');
const InRowSpacer = goog.require('Blockly.blockRendering.InRowSpacer');
const InlineInput = goog.require('Blockly.blockRendering.InlineInput');
const InputConnection = goog.require('Blockly.blockRendering.InputConnection');
const InputRow = goog.require('Blockly.blockRendering.InputRow');
const IPathObject = goog.require('Blockly.blockRendering.IPathObject');
const JaggedEdge = goog.require('Blockly.blockRendering.JaggedEdge');
const MarkerSvg = goog.require('Blockly.blockRendering.MarkerSvg');
const Measurable = goog.require('Blockly.blockRendering.Measurable');
const NextConnection = goog.require('Blockly.blockRendering.NextConnection');
const OutputConnection = goog.require('Blockly.blockRendering.OutputConnection');
const PathObject = goog.require('Blockly.blockRendering.PathObject');
const PreviousConnection = goog.require('Blockly.blockRendering.PreviousConnection');
const Renderer = goog.require('Blockly.blockRendering.Renderer');
const RenderInfo = goog.require('Blockly.blockRendering.RenderInfo');
const RoundCorner = goog.require('Blockly.blockRendering.RoundCorner');
const Row = goog.require('Blockly.blockRendering.Row');
const SpacerRow = goog.require('Blockly.blockRendering.SpacerRow');
const SquareCorner = goog.require('Blockly.blockRendering.SquareCorner');
const StatementInput = goog.require('Blockly.blockRendering.StatementInput');
/* eslint-disable-next-line no-unused-vars */
const Theme = goog.requireType('Blockly.Theme');
const TopRow = goog.require('Blockly.blockRendering.TopRow');
const Types = goog.require('Blockly.blockRendering.Types');
const debug = goog.require('Blockly.blockRendering.debug');
const deprecation = goog.require('Blockly.utils.deprecation');
const registry = goog.require('Blockly.registry');

/**
 * Returns whether the debugger is turned on.
 * @return {boolean} Whether the debugger is turned on.
 * @alias Blockly.blockRendering.isDebuggerEnabled
 * @package
 */
const isDebuggerEnabled = function() {
  deprecation.warn(
      'Blockly.blockRendering.isDebuggerEnabled()', 'September 2021',
      'September 2022', 'Blockly.blockRendering.debug.isDebuggerEnabled()');
  return debug.isDebuggerEnabled();
};
exports.isDebuggerEnabled = isDebuggerEnabled;

/**
 * Registers a new renderer.
 * @param {string} name The name of the renderer.
 * @param {!Function} rendererClass The new renderer class
 *     to register.
 * @throws {Error} if a renderer with the same name has already been registered.
 */
 const register = function(name, rendererClass) {
  registry.register(registry.Type.RENDERER, name, rendererClass);
};
exports.register = register;

/**
 * Unregisters the renderer registered with the given name.
 * @param {string} name The name of the renderer.
 * @alias Blockly.blockRendering.unregister
 */
const unregister = function(name) {
  registry.unregister(registry.Type.RENDERER, name);
};
exports.unregister = unregister;

/**
 * Turn on the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.startDebugger
 */
const startDebugger = function() {
  deprecation.warn(
      'Blockly.blockRendering.startDebugger()', 'September 2021',
      'September 2022', 'Blockly.blockRendering.debug.startDebugger()');
  debug.startDebugger();
};
exports.startDebugger = startDebugger;

/**
 * Turn off the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.stopDebugger
 */
const stopDebugger = function() {
  deprecation.warn(
      'Blockly.blockRendering.stopDebugger()', 'September 2021',
      'September 2022', 'Blockly.blockRendering.debug.stopDebugger()');
  debug.stopDebugger();
};
exports.stopDebugger = stopDebugger;

/**
 * Initialize anything needed for rendering (constants, etc).
 * @param {!string} name Name of the renderer to initialize.
 * @param {!Theme} theme The workspace theme object.
 * @param {Object=} opt_rendererOverrides Rendering constant overrides.
 * @return {!Renderer} The new instance of a renderer.
 *     Already initialized.
 * @package
 * @alias Blockly.blockRendering.init
 */
const init = function(name, theme, opt_rendererOverrides) {
  const rendererClass = registry.getClass(registry.Type.RENDERER, name);
  const renderer = new rendererClass(name);
  renderer.init(theme, opt_rendererOverrides);
  return renderer;
};
exports.init = init;

exports.BottomRow = BottomRow;
exports.Connection = Connection;
exports.ConstantProvider = ConstantProvider;
exports.Debug = Debug;
exports.Drawer = Drawer;
exports.ExternalValueInput = ExternalValueInput;
exports.Field = Field;
exports.Hat = Hat;
exports.Icon = Icon;
exports.InRowSpacer = InRowSpacer;
exports.InlineInput = InlineInput;
exports.InputConnection = InputConnection;
exports.InputRow = InputRow;
exports.IPathObject = IPathObject;
exports.JaggedEdge = JaggedEdge;
exports.MarkerSvg = MarkerSvg;
exports.Measurable = Measurable;
exports.NextConnection = NextConnection;
exports.OutputConnection = OutputConnection;
exports.PathObject = PathObject;
exports.PreviousConnection = PreviousConnection;
exports.Renderer = Renderer;
exports.RenderInfo = RenderInfo;
exports.RoundCorner = RoundCorner;
exports.Row = Row;
exports.SpacerRow = SpacerRow;
exports.SquareCorner = SquareCorner;
exports.StatementInput = StatementInput;
exports.TopRow = TopRow;
exports.Types = Types;
exports.debug = debug;