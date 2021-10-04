Blockly.JavaScript['send'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `$.send()`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['send_msg'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.sendMsg(${value_name});\n`;
    return code;
};

Blockly.JavaScript['send_json'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.sendJson(${value_name});\n`;
    return code;
};

Blockly.JavaScript['send_xml'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.sendXml(${value_name});\n`;
    return code;
};

Blockly.JavaScript['send_ptt'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.sendPtt(${value_name});\n`;
    return code;
};

Blockly.JavaScript['add_text'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.sendText(${value_name});\n`;
    return code;
};

Blockly.JavaScript['add_at'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.addAt(${value_name});\n`;
    return code;
};

Blockly.JavaScript['add_img'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.addImg(${value_name});\n`;
    return code;
};

Blockly.JavaScript['set_id'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.setId(${value_name});\n`;
    return code;
};

Blockly.JavaScript['set_uin'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.setUin(${value_name});\n`;
    return code;
};

Blockly.JavaScript['set_code'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `$.setCode(${value_name});\n`;
    return code;
};

Blockly.JavaScript['setcontinue'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name + ';\n';
    return code;
};

Blockly.JavaScript['entry'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NEW);
    var statements_code = Blockly.JavaScript.statementToCodeWithoutSpaces(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = value_name.slice(1, -1) + '\nJS2\n' + statements_code;
    return code;
};