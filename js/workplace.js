'use strict';

var showCode = 'code';

function myUpdateFunction(event) {
    if (showCode == 'code') {
        var languageDropdown = document.getElementById('languageDropdown');
        var languageSelection = languageDropdown.options[languageDropdown.selectedIndex].value;
        var codeDiv = document.getElementById('codeDiv');
        var codeHolder = document.createElement('textarea');
        codeHolder.className = 'prettyprint but-not-that-pretty';
        codeHolder.id = 'xml_out';
        var code = document.createTextNode(Blockly[languageSelection].workspaceToCode(Code.workspace));
        codeHolder.appendChild(code);
        codeDiv.replaceChild(codeHolder, codeDiv.lastElementChild);
        prettyPrint();
    } else {}
}

setInterval(myUpdateFunction, 2000);

function showXml() {
    if (showCode == 'xml') {
        showCode = 'code';
        myUpdateFunction;
        document.getElementById("showbtn").innerHTML = "JS";
    } else {
        showCode = 'xml';
        var xmlcontent = Blockly.Xml.workspaceToDom(Code.workspace);
        var xml_text = Blockly.Xml.domToPrettyText(xmlcontent);
        xml_text = xml_text.replace(/</g, "&lt;");

        document.getElementById("xml_out").innerHTML = xml_text;
        document.getElementById("showbtn").innerHTML = "Xml";
    }
}

function download() {
    var xmlcontent = Blockly.Xml.workspaceToDom(Code.workspace);
    var xml_text = Blockly.Xml.domToPrettyText(xmlcontent); //Blockly.Xml.domToText(xmlcontent);
    if (xml_text == "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>") {
        window.alert("无内容！");
        return;
    }
    var randomfilename = window.prompt('文件名');
    if (!randomfilename.length) {
        var randomfilename = "hdic" //Math.random().toString(36).substr(2);
    }

    createAndDownloadFile(randomfilename + ".xml", xml_text);
}

function createAndDownloadFile(fileName, content) {
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
}


function load() {
    var xml_text = window.prompt('输入xml内容');
    if (xml_text == null || xml_text == '') {
        window.alert("已取消！");
    } else if (xml_text.slice(0, 55) != '<xml xmlns="https://developers.google.com/blockly/xml">' || xml_text.slice(xml_text.length - 6, xml_text.length) != '</xml>') {
        window.alert("不是xml或xml有误！");
    } else {
        var xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    }
};

new ClipboardJS('.copybtn');