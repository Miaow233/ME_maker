'use strict';

Blockly.Blocks['bianliang'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("内置变量")
            .appendField(new Blockly.FieldDropdown([
                ["消息内容", "$arg(0)"],
                ["机器人QQ", "$robot"],
                ["群号", "$group"],
                ["群名称", "$groupName"],
                ["发送者QQ", "$uin"],
                ["消息发送时间", "$time"],
                ["标题", "$title"],
                ["机器码", "$machineCode"],
                ["群code", "$code"],
                ["发送者昵称", "$nick"],
                ["消息标记", "$mark"]
            ]), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("内置变量");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['send'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("发送");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sendmsg'] = {
    init: function () {
        this.appendValueInput("msg")
            .setCheck(null)
            .appendField("发送消息");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }

};

Blockly.Blocks['addtext'] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("添加文本");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['addimg'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("添加图片");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['addat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("添加艾特")
            .appendField(new Blockly.FieldTextInput("$uin"), "uin")
            .appendField(new Blockly.FieldTextInput("$nick"), "nick");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['readfile'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("读文件");
        this.appendValueInput("path")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("路径");
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("指定键值");
        this.appendValueInput("defval")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("默认值");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['writefile'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("写文件");
        this.appendValueInput("path")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("路径");
        this.appendValueInput("key")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("指定键值");
        this.appendValueInput("val")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['replaceall'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("在");
        this.appendValueInput("content")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("中，将");
        this.appendValueInput("src")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("替换为");
        this.appendValueInput("dst")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['access'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("网络访问");
        this.appendValueInput("url")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("链接");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['setcontinue'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["继续", "$enableNext()"],
                ["不继续", "$disableNext()"]
            ]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['log'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("输出")
            .appendField(new Blockly.FieldDropdown([
                ["消息", "i"],
                ["警告", "w"],
                ["错误", "e"]
            ]), "type")
            .appendField("日志");
        this.appendValueInput("msg")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("日志内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['grouplist'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取机器人加的所有群");
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("获取群列表");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['membersof'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("群成员列表");
        this.appendValueInput("group")
            .setCheck("Number")
            .appendField("群号");
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("返回群成员列表可一次获取多个群");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mute'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("禁言指定Q号");
        this.appendValueInput("group")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("群号");
        this.appendValueInput("member")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Q号");
        this.appendValueInput("time")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("时长(秒)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};