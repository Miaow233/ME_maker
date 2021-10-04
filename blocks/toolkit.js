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
            .setCheck("String");
        this.appendDummyInput()
            .appendField("中，将");
        this.appendValueInput("src")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("替换为");
        this.appendValueInput("dst")
            .setCheck("String");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("将指定文本（content）中的指定值（src支持正则表达式）替换为指定目标（dst）");
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
        this.appendValueInput("data")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("data");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("访问网络，只填写url时为GET方式，有data时为POST方式");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['time2day'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("时间戳转时间");
        this.appendValueInput("time")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("时间戳");
        this.appendValueInput("format")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("时间格式化文本");
        this.setOutput(true, null);
        this.setColour(65);
        this.setTooltip("format为时间格式化文本，y年M月d日H/h时m分s秒\t格式化获取当前系统时间，填写format时返回时间戳");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['setcontinue'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Boolean")
            .appendField("setContinue");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['time'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取当前时间");
        this.appendValueInput("format")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("时间格式化文本");
        this.setOutput(true, null);
        this.setColour(60);
        this.setTooltip("format为时间格式化文本，y年M月d日H/h时m分s秒\t格式化获取当前系统时间，填写format时返回时间戳");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sleep'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("延时");
        this.appendDummyInput()
            .appendField("毫秒");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("休眠延迟,单位毫秒,1000毫秒=1秒");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['middle'] = {
    init: function () {
        this.appendValueInput("msg")
            .setCheck("String")
            .appendField("取出");
        this.appendValueInput("head")
            .setCheck("String")
            .appendField("中在");
        this.appendValueInput("tail")
            .setCheck("String")
            .appendField("和");
        this.appendDummyInput()
            .appendField("之间的部分");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("取中间");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['download'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("下载文件");
        this.appendValueInput("url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("链接");
        this.appendValueInput("path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("保存路径");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};