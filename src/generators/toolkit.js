import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['readfile'] = function (block) {
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_defval = Blockly.JavaScript.valueToCode(block, 'defval', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `$.readFile(${value_path}, ${value_key}, ${value_defval})`;
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['writefile'] = function (block) {
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.writeFile(${value_path}, ${value_key}, ${value_val});\n`;
    return code;
};

Blockly.JavaScript['replaceall'] = function (block) {
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
    var value_src = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
    var value_dst = Blockly.JavaScript.valueToCode(block, 'dst', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.replaceAll(${value_content}, ${value_src}, ${value_dst})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['access'] = function (block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    if (value_data != '') {
        var code = `$.access(${value_url}, ${value_data})`;
    } else {
        var code = `$.access(${value_url})`;
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time'] = function (block) {
    var code = '$time()';
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

Blockly.JavaScript['sleep'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.sleep(${value_name})`
    return code;
};

Blockly.JavaScript['middle'] = function (block) {
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var value_head = Blockly.JavaScript.valueToCode(block, 'head', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tail = Blockly.JavaScript.valueToCode(block, 'tail', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.middle(${value_msg}, ${value_head}, ${value_tail})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['download'] = function (block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$.download(${value_url}, ${value_path})`;
    return code;
};