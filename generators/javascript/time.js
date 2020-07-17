'use strict';

Blockly.JavaScript['time'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '$currentTime';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['time2day'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var getCompareFunctionName = Blockly.JavaScript.provideFunction_(
        'getTsFormatDate',
        ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
            '(timeStamp) {',
            '  var date = new Date(timeStamp);',
            '  var seperator1 = "-";',
            '  var year = date.getFullYear();',
            '  var month = date.getMonth() + 1;',
            '  var strDate = date.getDate();',
            '  if (month >= 1 && month <= 9) {',
            '      month = "0" + month;',
            '  }',
            '  if (strDate >= 0 && strDate <= 9) {',
            '      strDate = "0" + strDate;',
            '  }',
            '  var currentdate = year + seperator1 + month + seperator1 + strDate;',
            '  return currentdate;',
            '}'
        ]);
    return [
        getCompareFunctionName + '(' + value_name + ')',
        Blockly.JavaScript.ORDER_FUNCTION_CALL
    ];
};