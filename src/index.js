import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';
import Zh from 'blockly/msg/zh-hans';
import './style.css'
Blockly.setLocale(Zh);


document.addEventListener("DOMContentLoaded", function () {
    const workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: document.getElementById('toolbox'),
            media: 'media/'
        });

    const lang = 'JavaScript';
    const button = document.getElementById('blocklyButton');
    button.addEventListener('click', function () {
        alert("Check the console for the generated output.");
        const code = Blockly[lang].workspaceToCode(workspace);
        console.log(code);
    })
});
