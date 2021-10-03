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

Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取实际时间戳");
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time2day'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("时间戳转时间");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("时间戳");
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setcontinue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["继续","$enableNext()"], ["不继续","$disableNext()"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};