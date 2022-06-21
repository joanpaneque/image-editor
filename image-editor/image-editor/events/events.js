import { cnv } from "../main.js"
import { updateToolbox, updateTool } from "../toolbox/toolbox.js"
import { toolbox } from "../toolbox/toolbox.js";
import { aside } from "../aside/aside.js";
import { canvas } from "../dom/dom.js";

var oldX
var oldY

export var keys = []

export function loadEvents() {
    window.addEventListener('resize', () => {
        cnv.centerCanvas()
    })

    document.body.onmousedown = () => {
        window.mouseDown = true;
    }

    document.body.onmouseup = () => {
        window.mouseDown = false;
    }

    document.onmousemove = (e) => {
        oldX = window.mouseX
        window.mouseX = e.clientX

        oldY = window.mouseY
        window.mouseY = e.clientY

        window.mouseXMovement = window.mouseX - oldX
        window.mouseYMovement = window.mouseY - oldY

        window.canvasY = window.innerHeight / 2 - canvas.height / 2
        window.canvasX = (((window.innerWidth - aside.width) - toolbox.width) / 2 + toolbox.width - canvas.width / 2)
        

        window.mouseXCanvas = window.mouseX - canvas.offsetLeft
        window.mouseYCanvas = window.mouseY - canvas.offsetTop


        window.touchingCanvas = false;
        if (window.mouseX > window.canvasX && window.mouseY > window.canvasY && window.mouseX < window.canvasX+canvas.width && window.mouseY < window.canvasY + canvas.height) window.touchingCanvas = true;

    }

    document.onkeydown = e => {
        if (!keys.includes(e.key)) keys.push(e.key)
    }

    document.onkeyup = e => {
        keys.splice(keys.indexOf(e.key), 1)
    }

}


export function updateAll() {
    document.body.style.cursor = "default";
    updateToolbox()
    updateTool(window.tool)
}