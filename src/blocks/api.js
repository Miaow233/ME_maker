import * as Blockly from 'blockly/core';

Blockly.Blocks['send'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("send");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("发送存储的消息");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['send_msg'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("sendMsg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("发送参数中的消息，自动识别xml,json");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['send_json'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("sendJson");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("不做检查直接发送JSON消息，如果内容不是JSON将发送失败");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['send_xml'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("sendXml");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("不做检查直接发送xml消息，如果内容不是xml将发送失败");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['send_ptt'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("sendPtt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("发送语音消息，参数为直链网址或本地路径");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['add_text'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("addText");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("添加文本消息，用于合并不同的消息，不会立即发送，通过调用send发送存储的消息");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['add_at'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("addAt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("添加@消息，用于合并不同的消息，不会立即发送，通过调用send发送存储的消息");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['add_img'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("addImg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("添加图片消息，用于合并不同的消息，不会立即发送，通过调用send发送存储的消息");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_id'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("setId");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("设置群ID，非特殊情况(发送消息到别的群)此方法无需调用，默认为消息来源群");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_uin'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("setUin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("设置消息发送目标，发送群临时消息时需要设置这个值");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_code'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("setCode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("设置群Code，发送群临时消息给成员时需要设置这个值");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['setcontinue'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
      ["继续", "$enableNext()"],
      ["不继续", "$disableNext()"]
    ]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['entry'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("词条");
    this.appendStatementInput("code")
      .setCheck(null);
    this.setInputsInline(true);
    this.setColour(330);
    this.setTooltip("支持正则");
    this.setHelpUrl("");
  }
};

