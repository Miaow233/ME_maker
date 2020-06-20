'use strict';

Blockly.Blocks['bianliang'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["机器人QQ", "$robot"],
                ["群号", "$group"],
                ["群名称", "$groupName"],
                ["发送者QQ", "$uin"],
                ["消息发送时间", "$time"],
                ["标题", "$title"],
                ["私聊号", "$code"],
                ["发送者昵称", "$nick"],
                ["消息标记", "$mark"]
            ]), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("内置变量");
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
};Blockly.Blocks['addtext'] = {
    init: function() {
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