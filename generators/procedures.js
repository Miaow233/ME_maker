/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Dic for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';



Blockly.Dic['procedures_defreturn'] = function (block) {
  // Define a procedure with a return value.
  var funcName = Blockly.Dic.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
  var xfix1 = '';
  if (Blockly.Dic.STATEMENT_PREFIX) {
    xfix1 += Blockly.Dic.injectId(Blockly.Dic.STATEMENT_PREFIX,
      block);
  }
  if (Blockly.Dic.STATEMENT_SUFFIX) {
    xfix1 += Blockly.Dic.injectId(Blockly.Dic.STATEMENT_SUFFIX,
      block);
  }
  if (xfix1) {
    xfix1 = Blockly.Dic.prefixLines(xfix1, Blockly.Dic.INDENT);
  }
  var loopTrap = '';
  if (Blockly.Dic.INFINITE_LOOP_TRAP) {
    loopTrap = Blockly.Dic.prefixLines(
      Blockly.Dic.injectId(Blockly.Dic.INFINITE_LOOP_TRAP,
        block), Blockly.Dic.INDENT);
  }
  var branch = Blockly.Dic.statementToCode(block, 'STACK');
  var returnValue = Blockly.Dic.valueToCode(block, 'RETURN',
    Blockly.Dic.ORDER_NONE) || '';
  var xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = Blockly.Dic.INDENT + 'return ' + returnValue + ';\n';
  }
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.Dic.variableDB_.getName(block.arguments_[i],
      Blockly.VARIABLE_CATEGORY_NAME);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
    xfix1 + loopTrap + branch + xfix2 + returnValue + '}';
  code = Blockly.Dic.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.Dic.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Dic['procedures_defnoreturn'] =
  Blockly.Dic['procedures_defreturn'];

Blockly.Dic['procedures_callreturn'] = function (block) {
  // Call a procedure with a return value.
  var funcName = Blockly.Dic.variableDB_.getName(
    block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.Dic.valueToCode(block, 'ARG' + i,
      Blockly.Dic.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Dic.ORDER_FUNCTION_CALL];
};

Blockly.Dic['procedures_callnoreturn'] = function (block) {
  // Call a procedure with no return value.
  // Generated code is for a function call as a statement is the same as a
  // function call as a value, with the addition of line ending.
  var tuple = Blockly.Dic['procedures_callreturn'](block);
  return tuple[0] + ';\n';
};

Blockly.Dic['procedures_ifreturn'] = function (block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.Dic.valueToCode(block, 'CONDITION',
    Blockly.Dic.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (Blockly.Dic.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the return is triggered.
    code += Blockly.Dic.prefixLines(
      Blockly.Dic.injectId(Blockly.Dic.STATEMENT_SUFFIX, block),
      Blockly.Dic.INDENT);
  }
  if (block.hasReturnValue_) {
    var value = Blockly.Dic.valueToCode(block, 'VALUE',
      Blockly.Dic.ORDER_NONE) || 'null';
    code += Blockly.Dic.INDENT + 'return ' + value + ';\n';
  } else {
    code += Blockly.Dic.INDENT + 'return;\n';
  }
  code += '}\n';
  return code;
};