var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    media: 'media/',
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    trashcan: true
});

function myUpdateFunction(event) {
    var languageDropdown = document.getElementById('languageDropdown');
    var languageSelection = languageDropdown.options[languageDropdown.selectedIndex].value;
    var codeDiv = document.getElementById('codeDiv');
    var codeHolder = document.createElement('pre');
    codeHolder.className = 'prettyprint but-not-that-pretty';
    codeHolder.id = 'xml_out';
    var code = document.createTextNode(Blockly[languageSelection].workspaceToCode(workspace));
    codeHolder.appendChild(code);
    codeDiv.replaceChild(codeHolder, codeDiv.lastElementChild);
    prettyPrint();
}
workspace.addChangeListener(myUpdateFunction);

function save() {

    var xmlcontent = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xmlcontent);
    if (xml_text == "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>") {
        window.alert("无内容！");
        return;
    }
    var randomfilename = "hdic" //Math.random().toString(36).substr(2);
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