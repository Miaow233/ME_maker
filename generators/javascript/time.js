'use strict';

Blockly.JavaScript['time'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '$currentTime';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['time2day'] = function (block) {
    var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timeStamp', Blockly.JavaScript.ORDER_ATOMIC);
    var value_fmt = Blockly.JavaScript.valueToCode(block, 'fmt', Blockly.JavaScript.ORDER_ATOMIC);
    var getCompareFunctionName = Blockly.JavaScript.provideFunction_(
        'timeFormat',
        ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
            '(fmt, timeStamp) {',
            '  let ret;',
            '  let opt = {',
            '      "Y+": timeStamp.getFullYear().toString(),', // 年
            '      "m+": (timeStamp.getMonth() + 1).toString(),', // 月
            '      "d+": timeStamp.getDate().toString(),', // 日
            '      "H+": timeStamp.getHours().toString(),', // 时
            '      "M+": timeStamp.getMinutes().toString(),', // 分
            '      "S+": timeStamp.getSeconds().toString()', // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
            '  };',
            '  for (let k in opt) {',
            '      ret = new RegExp("(" + k + ")").exec(fmt);',
            '      if (ret) {',
            '          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))',
            '      };',
            '  };',
            '  return fmt;',
            '}'
        ]);
    return [getCompareFunctionName + '(' + value_fmt + ',' + value_timestamp + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};