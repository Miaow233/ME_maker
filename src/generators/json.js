import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['json_getkey'] = function (block) {
	var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
	var value_propertyname = Blockly.JavaScript.valueToCode(block, 'propertyName', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = value_var + "[" + value_propertyname + "]";
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['json_deletekey'] = function (block) {
	var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
	var value_propertyname = Blockly.JavaScript.valueToCode(block, 'propertyName', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = "delete " + value_var + "[" + value_propertyname + "];\n";
	return code;
};

Blockly.JavaScript['json_setkey'] = function (block) {
	var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
	var value_propertyname = Blockly.JavaScript.valueToCode(block, 'propertyName', Blockly.JavaScript.ORDER_ATOMIC);
	var value_valuename = Blockly.JavaScript.valueToCode(block, 'valueName', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = value_var + "[" + value_propertyname + "] = " + value_valuename + ";\n";
	return code;
};

Blockly.JavaScript['json_getlength'] = function (block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = "Object.keys(" + value_name + ").length";
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['json_createjson'] = function (block) {
	// TODO: Assemble JavaScript into code variable.
	var code = "{}";
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['json_stringify'] = function (block) {
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	if (value_text == "" || value_text == null) {
		value_text = "[]"
	}
	var code = "JSON.stringify(" + value_text + ")";
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['json_parse'] = function (block) {
	var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = "JSON.parse(" + value_content + ")";
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};