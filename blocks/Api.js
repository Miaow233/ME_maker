'use strict';

Blockly.Blocks['send'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("发送");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("发送储存的消息");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sendmsg'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("发送消息");
        this.appendValueInput("msg")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("发送参数中的消息，自动识别xml,json");
        this.setHelpUrl("http://www.dicq.online/#API%E5%88%97%E8%A1%A8");
    }
};

Blockly.Blocks['metext'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("text"), "text");
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['in_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["手机根目录", "@path"],
                ["机器人QQ", "@robot"],
                ["群号", "@group"],
                ["群名称", "@groupName"],
                ["发送者QQ", "@uin"],
                ["消息发送时间", "@time"],
                ["标题", "@title"],
                ["机器码", "@machineCode"],
                ["群code", "@code"],
                ["发送者昵称", "@nick"],
                ["消息标记", "@mark"]
            ]), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("内置变量");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['me_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("收到")
            .appendField(new Blockly.FieldDropdown([
                ["群聊", ""],
                ["好友", "[临时]"]
            ]), "NAME")
            .appendField("消息");
        this.appendValueInput("msg")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("消息内容为");
        this.appendStatementInput("dic")
            .setCheck(null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};