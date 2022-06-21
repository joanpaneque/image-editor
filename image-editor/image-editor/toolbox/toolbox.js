import { tb, tb_container } from "../dom/dom.js";
import { cnv } from "../main.js"
import { blockCursor, cursor, unblockCursor } from "../cursor/cursor.js"

import { penTool } from "./tools/pen.js";

var tools = [
//  TOOL           ICON                                       ID
    [["pen"],      ["image-editor/toolbox/ico/pen.png"],      ["tool.pen"]],
    [["selection"],["image-editor/toolbox/ico/selection.png"],["tool.selection"]],
    [["pen"],      ["image-editor/toolbox/ico/pen.png"],      ["tool.pen1"]],
    [["selection"],["image-editor/toolbox/ico/selection.png"],["tool.selection1"]],
    [["pen"],      ["image-editor/toolbox/ico/pen.png"],      ["tool.pen2"]],
    [["selection"],["image-editor/toolbox/ico/selection.png"],["tool.selection2"]],
    [["pen"],      ["image-editor/toolbox/ico/pen.png"],      ["tool.pen3"]],
    [["selection"],["image-editor/toolbox/ico/selection.png"],["tool.selection3"]],
    [["pen"],      ["image-editor/toolbox/ico/pen.png"],      ["tool.pen4"]],
    [["selection"],["image-editor/toolbox/ico/selection.png"],["tool.selection4"]],
    [["pen"],      ["image-editor/toolbox/ico/pen.png"],      ["tool.pen5"]],
    [["selection"],["image-editor/toolbox/ico/selection.png"],["tool.selection5"]],
]
export class Toolbox {
    constructor(w) {
        this.setWidth(75);
        loadTools();
    }

    setWidth(w) {
        tb.style.width = `${w}px`;
        this.width = w;
    }
}

function loadTools() {
    tools.forEach(tool => {
        let el = document.createElement("li");
        let ico = document.createElement("img");
        el.appendChild(ico)
        ico.src = tool[1];
        el.setAttribute("id",tool[2])
        el.style.width = `${40}px`;
        el.style.height = `${40}px`;
        ico.style.position = "relative"
        ico.style.top = "0"
        ico.style.left = "0"
        el.style.display = "inline-block";
        el.onclick = () => {
            window.tool = tool[2];
            disableAllTools();
            el.style.background = "#555"
        }
        tb_container.appendChild(el);
    })
}

var resizingToolbox

export function updateToolbox() {

        if (resizingToolbox && window.mouseDown) {
            blockCursor("updateToolbox")
            cursor("col-resize", "updateToolbox");

            if (window.mouseX >= 85) {
                toolbox.setWidth(window.mouseX)
                cnv.centerCanvas()
            }
        } else {
            unblockCursor("updateToolbox")
            resizingToolbox = false
        }

        if (window.mouseX > toolbox.width - 5 && window.mouseX < toolbox.width + 5) {
            if (!window.mouseDown) {
                cursor("col-resize", "updateToolbox")
                setTimeout(() => {
                    if (window.mouseDown) {
                        resizingToolbox = true
                    }
                }, 50)
            }


    }
}

export var toolbox = new Toolbox(15);

function disableAllTools() {
    tools.forEach(tool => {
        document.getElementById(tool[2]).style.background = "none";
    })
}

export function updateTool(tool) {
    if (tool == "tool.pen") penTool()
}