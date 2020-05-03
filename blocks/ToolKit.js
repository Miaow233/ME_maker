'use strict';

Blockly.Blocks['toolkit_setconfig'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("写配置");
      this.appendValueInput("path")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("路径");
      this.appendValueInput("1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("配置节");
      this.appendValueInput("2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("配置项");
      this.appendValueInput("3")
          .setCheck(null)
          .appendField("配置内容");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['toolkit_getconfig'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("读配置");
      this.appendValueInput("path")
          .setCheck(null)
          .appendField("路径");
      this.appendValueInput("1")
          .setCheck(null)
          .appendField("配置项");
      this.appendValueInput("2")
          .setCheck(null)
          .appendField("配置节");
      this.appendValueInput("3")
          .setCheck(null)
          .appendField("默认值");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };