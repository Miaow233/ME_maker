'use strict';

Blockly.JavaScript['send'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Api->send()\n';
    return code;
};

Blockly.JavaScript['sendmsg'] = function (block) {
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Api->sendMsg(' + value_msg + ')\n';
    return code;
};

Blockly.JavaScript['metext'] = function (block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble JavaScript into code variable.
    var code = text_text;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['in_value'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['me_init'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_NONE);
    var statements_dic = Blockly.JavaScript.statementToCode(block, 'dic');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name + value_msg + '\n' + statements_dic;
    return code;
};