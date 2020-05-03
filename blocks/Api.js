'use strict';

Blockly.Blocks['api_send'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("发送");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("Api->send()");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['api_sendmsg'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("发送")
            .appendField(new Blockly.FieldDropdown([
                ["群", "group"],
                ["私聊|临时", "normal"]
            ]), "method")
            .appendField("消息");
        this.appendValueInput("code")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("号码");
        this.appendValueInput("content")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("消息内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("发送参数中的消息，自动识别xml,json");
        this.setHelpUrl("http://www.dicq.online/#API%E5%88%97%E8%A1%A8");
    }
};

Blockly.Blocks['getcode'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取参数")
            .appendField(new Blockly.FieldDropdown([
                ["群号", "@group"],
                ["发送者QQ", "@uin"],
                ["消息内容", "@c0"],
                ["消息ID", "Api->getMark()"]
            ]), "type");
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};