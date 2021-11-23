import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['send'] = function (block) {
    var code = `$.send()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['send_msg'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.sendMsg(${value_name});\n`;
    return code;
};

Blockly.JavaScript['send_json'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.sendJson(${value_name});\n`;
    return code;
};

Blockly.JavaScript['send_xml'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.sendXml(${value_name});\n`;
    return code;
};

Blockly.JavaScript['send_ptt'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.sendPtt(${value_name});\n`;
    return code;
};

Blockly.JavaScript['add_text'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.sendText(${value_name});\n`;
    return code;
};

Blockly.JavaScript['add_at'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.addAt(${value_name});\n`;
    return code;
};

Blockly.JavaScript['add_img'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.addImg(${value_name});\n`;
    return code;
};

Blockly.JavaScript['set_id'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.setId(${value_name});\n`;
    return code;
};

Blockly.JavaScript['set_uin'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.setUin(${value_name});\n`;
    return code;
};

Blockly.JavaScript['set_code'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.setCode(${value_name});\n`;
    return code;
};

Blockly.JavaScript['setcontinue'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    
    var code = dropdown_name + ';\n';
    return code;
};

Blockly.JavaScript['entry'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NEW);
    var statements_code = Blockly.JavaScript.statementToCodeWithoutSpaces(block, 'code');
    
    var code = value_name.slice(1, -1) + '\nJS2\n' + statements_code;
    return code;
};