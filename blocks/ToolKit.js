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
          .appendField("节点名");
      this.appendValueInput("2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("键");
      this.appendValueInput("3")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("值");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("参数为3-4个由【路径】、【节点名=Default】、【键】、【值】组成");
   this.setHelpUrl("https://medic.run/d/55");
    }
  };
  
  Blockly.Blocks['toolkit_getconfig'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("读配置");
      this.appendValueInput("path")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("路径");
      this.appendValueInput("1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("节点名");
      this.appendValueInput("2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("键");
      this.appendValueInput("3")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("默认值");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("参数为3-4个由【路径】、【节点名=Default】、【键】、【默认值】组成");
   this.setHelpUrl("https://medic.run/d/55");
    }
  };