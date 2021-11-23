import { saveAs } from "file-saver";

import * as Blockly from "blockly/core";
import "blockly/blocks";
import "./blocks/api";
import "./blocks/json";
import "./blocks/toolkit";

import "blockly/javascript";
import "./generators/api";
import "./generators/json";
import "./generators/toolkit";

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
      alert("请选择一个xml文件");
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
  /**
   * Load blocks saved on App Engine Storage or in session/local storage.
   * @param {string} defaultXml Text representation of default blocks.
   */
  const loadBlocks = function (defaultXml) {
    try {
      var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
      // Firefox sometimes throws a SecurityError when accessing sessionStorage.
      // Restarting Firefox fixes this, so it looks like a bug.
      var loadOnce = null;
    }
    if ("BlocklyStorage" in window && window.location.hash.length > 1) {
      // An href with #key trigers an AJAX call to retrieve saved blocks.
      BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
      // Language switching stores the blocks during the reload.
      delete window.sessionStorage.loadOnceBlocks;
      var xml = Blockly.Xml.textToDom(loadOnce);
      Blockly.Xml.domToWorkspace(xml, workspace);
    } else if (defaultXml) {
      // Load the editor with default starting blocks.
      var xml = Blockly.Xml.textToDom(defaultXml);
      Blockly.Xml.domToWorkspace(xml, workspace);
    } else if ("BlocklyStorage" in window) {
      // Restore saved blocks in a separate thread so that subsequent
      // initialization is not affected from a failed load.
      window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
  };
  loadBlocks("");

  if ("BlocklyStorage" in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(workspace);
  }
});
