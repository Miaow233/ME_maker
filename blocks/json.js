Blockly.Blocks['json_getkey'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("取出json");
	  this.appendValueInput("VAR")
		  .setCheck("String");
	  this.appendValueInput("propertyName")
		  .setCheck(null)
		  .appendField("中");
	  this.appendDummyInput()
		  .appendField("的值");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(240);
   this.setTooltip("获取键值");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['json_deletekey'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("删除json");
	  this.appendValueInput("VAR")
		  .setCheck("String");
	  this.appendValueInput("propertyName")
		  .setCheck(null)
		  .appendField("中  键值（key）为");
	  this.appendDummyInput()
		  .appendField("的记录");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['json_setkey'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("设置json");
	  this.appendValueInput("VAR")
		  .setCheck("String");
	  this.appendValueInput("propertyName")
		  .setCheck(null)
		  .appendField("中");
	  this.appendDummyInput()
		  .appendField("的值");
	  this.appendValueInput("valueName")
		  .setCheck(null)
		  .appendField("等于");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(240);
   this.setTooltip("设置键值");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['json_getlength'] = {
	init: function() {
	  this.appendValueInput("NAME")
		  .setCheck("json")
		  .appendField("json");
	  this.appendDummyInput()
		  .appendField("的长度");
	  this.setInputsInline(true);
	  this.setOutput(true, "Number");
	  this.setColour(240);
   this.setTooltip("返回json的长度");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['json_createjson'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("创建一个空json");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(240);
   this.setTooltip("返回json的长度");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['json_stringify'] = {
	init: function() {
	  this.appendValueInput("text")
		  .setCheck("Array")
		  .appendField("将js对象");
	  this.appendDummyInput()
		  .appendField("反解析为json文本");
	  this.setInputsInline(true);
	  this.setOutput(true, "String");
	  this.setColour(240);
   this.setTooltip("将js对象反解析为json文本");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['json_parse'] = {
	init: function() {
	  this.appendValueInput("content")
		  .setCheck("String")
		  .appendField("将JSON");
	  this.appendDummyInput()
		  .appendField("解析为js对象");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(240);
   this.setTooltip("将JSON解析为js对象");
   this.setHelpUrl("");
	}
  };