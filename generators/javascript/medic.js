'use strict';

Blockly.JavaScript['bianliang'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['send'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '$send();\n';
    return code;
};

Blockly.JavaScript['sendmsg'] = function (block) {
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$sendMessage(' + value_msg + ');\n';
    return code;
};

Blockly.JavaScript['addtext'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$addText(' + value_text + ');\n';
    return code;
};

Blockly.JavaScript['addimg'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$addImage(' + value_name + ');\n';
    return code;
};

Blockly.JavaScript['addat'] = function (block) {
    var text__uin = block.getFieldValue('uin');
    var text__nick = block.getFieldValue('nick');
    // TODO: Assemble JavaScript into code variable.
    var code = '$addAt(' + text__uin + ',' + text__nick + ');\n';
    return code;
};

Blockly.JavaScript['readfile'] = function (block) {
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_defval = Blockly.JavaScript.valueToCode(block, 'defval', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$getProperty(' + value_path + ',' + value_key + ',' + value_defval + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['writefile'] = function (block) {
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$setProperty(' + value_path + ',' + value_key + ',' + value_val + ');\n';
    return code;
};

Blockly.JavaScript['replaceall'] = function (block) {
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
    var value_src = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
    var value_dst = Blockly.JavaScript.valueToCode(block, 'dst', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_content + '.replace(' + value_src + ',' + value_dst + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['access'] = function (block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$access(' + value_url + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['setcontinue'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name + ';\n';
    return code;
};

Blockly.JavaScript['log'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    if (!dropdown_type.length == false) {
        var code = '$log(' + dropdown_type + ',' + value_msg + ');\n'
    } else {
        var code = '$log(' + value_msg + ');\n'
    }
    return code;
};

Blockly.JavaScript['grouplist'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['membersof'] = function (block) {
    var value_group = Blockly.JavaScript.valueToCode(block, 'group', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mute'] = function (block) {
    var value_group = Blockly.JavaScript.valueToCode(block, 'group', Blockly.JavaScript.ORDER_ATOMIC);
    var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};