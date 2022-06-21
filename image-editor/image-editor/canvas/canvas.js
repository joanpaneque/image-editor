import { canvas } from "../dom/dom.js";
import { toolbox } from "../toolbox/toolbox.js";
import { aside } from "../aside/aside.js";


export class Canvas {
    constructor(w, h) {
        canvas.width = w;
        canvas.height = h;
        this.c = canvas.getContext("2d");
        this.centerCanvas();
    }

    centerCanvas() {


        canvas.style.top = `${window.canvasY}px`
        canvas.style.left = `${window.canvasX}px`;


    }

    update() {
        this.centerCanvas()
    }
}