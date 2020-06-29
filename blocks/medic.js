'use strict';

Blockly.Blocks['bianliang'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("内置变量")
          .appendField(new Blockly.FieldDropdown([["手机根目录","$path"], ["机器人QQ","$robot"], ["群号","$group"], ["群名称","$groupName"], ["发送者QQ","$uin"], ["消息发送时间","$time"], ["标题","$title"], ["机器码","$machineCode"], ["群code","$code"], ["发送者昵称","$nick"], ["消息标记","$mark"]]), "NAME");
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

Blockly.Blocks['readfile'] = {
  init: function() {
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
    init: function() {
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
    init: function() {
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
    init: function() {
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