import { saveAs } from "file-saver";

import * as Blockly from "blockly/core";
import "blockly/blocks";
import "blockly/javascript";
import "./medic"

import { Message, Date} from "./message";
import "./jquery-3.6.0-min";

import BlocklyStorage from "./storage";
import "./style.css";
import Zh from "blockly/msg/zh-hans";
Blockly.setLocale(Zh);

document.addEventListener("DOMContentLoaded", function () {
  const workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox"),
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: "start",
    css: true,
    media: "media/",
    rtl: false,
    scrollbars: true,
    sounds: false,
    oneBasedIndex: true,
    grid: {
      spacing: 20,
      length: 1,
      colour: "#888",
      snap: false,
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
  });
});

  const lang = "JavaScript";
  document.getElementById("code").addEventListener("click", function () {
    const code = Blockly[lang].workspaceToCode(workspace);
    const name = prompt("要保存的JS文件名");
    if (name) {
      const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
      saveAs(blob, name + ".js");
    }
  });

  const input = document.querySelector("input");
  input.style.opacity = 0;
  document.getElementById("import").addEventListener("change", function () {
    var reader = new FileReader();
    if (this.files[0].type === "text/xml") {
      reader.readAsText(this.files[0]);
      reader.onload = function (evt) {
        var xml = Blockly.Xml.textToDom(evt.target.result);
        Blockly.Xml.domToWorkspace(xml, workspace);
      };
    } else {
      Message.Show("请选择一个xml文件");
    }
  });

  document.getElementById("export").addEventListener("click", function () {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const text = Blockly.Xml.domToText(xml);
    const name = prompt("要保存的文件名");
    if (name) {
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      saveAs(blob, name + ".xml");
    }
  });