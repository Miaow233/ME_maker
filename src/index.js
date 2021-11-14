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
            collapse: true,
            comments: true,
            disable: true,
            maxBlocks: Infinity,
            trashcan: true,
            horizontalLayout: false,
            toolboxPosition: 'start',
            css: true,
            media: 'media/',
            rtl: false,
            scrollbars: true,
            sounds: false,
            oneBasedIndex: true,
            grid: {
                spacing: 20,
                length: 1,
                colour: '#888',
                snap: false
            },
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            }
        });

    const lang = 'JavaScript';
    const button = document.getElementById('code')
    button.addEventListener('click', function () {
        alert("Check the console for the generated output.");
        const code = Blockly[lang].workspaceToCode(workspace);
        console.log(code);
        alert(code);
    })
});
