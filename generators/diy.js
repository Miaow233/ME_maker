'use strict';

Blockly.Dic['api_send'] = function (block) {
    var code = 'Api->send()\n';
    return code;
};

Blockly.Dic['api_sendmsg'] = function (block) {
    var dropdown_name = block.getFieldValue('method');
    var value_code = Blockly.Dic.valueToCode(block, 'code', Blockly.Dic.ORDER_ATOMIC);
    var value_content = Blockly.Dic.valueToCode(block, 'content', Blockly.Dic.ORDER_ATOMIC);
    var code = 'Api->sendMsg(' + value_content + ')\n';
    return code;
};

Blockly.Dic['getcode'] = function (block) {
    var dropdown_name = block.getFieldValue('type');
    var code = dropdown_name;
    return [code, Blockly.Dic.ORDER_ATOMIC];
};

Blockly.Dic['toolkit_setconfig'] = function (block) {
    var value_path = Blockly.Dic.valueToCode(block, 'path', Blockly.Dic.ORDER_ATOMIC);
    var value_1 = Blockly.Dic.valueToCode(block, '1', Blockly.Dic.ORDER_ATOMIC);
    var value_2 = Blockly.Dic.valueToCode(block, '2', Blockly.Dic.ORDER_ATOMIC);
    var value_3 = Blockly.Dic.valueToCode(block, '3', Blockly.Dic.ORDER_ATOMIC);
    var code = 'Toolkit->setConfig(' + value_path + '\\,' + value_1 + '\\,' + value_2 + '\\,' + value_3 + ')\n';
    return code;
};

Blockly.Dic['toolkit_getconfig'] = function (block) {
    var value_path = Blockly.Dic.valueToCode(block, 'path', Blockly.Dic.ORDER_ATOMIC);
    var value_1 = Blockly.Dic.valueToCode(block, '1', Blockly.Dic.ORDER_ATOMIC);
    var value_2 = Blockly.Dic.valueToCode(block, '2', Blockly.Dic.ORDER_ATOMIC);
    var value_3 = Blockly.Dic.valueToCode(block, '3', Blockly.Dic.ORDER_ATOMIC);
    var code = 'Toolkit->getConfig(' + value_path + '\\,' + value_1 + '\\,' + value_2 + '\\,' + value_3 + ')\n';
    return [code, Blockly.Dic.ORDER_ATOMIC];
};