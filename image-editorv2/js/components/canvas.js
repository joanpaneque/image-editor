import $ from "../utils/selector.js";

var canvasId = 0;
export var canvasArr = []


export class Canvas {
    constructor(width, height, name) {
        this.element = document.createElement("canvas")
        this.element.setAttribute("id",`c${canvasId}`)
        this.element.style.position = "absolute"
        this.element.width = width
        this.element.height = height
        this.element.name = name
        this.center()
        $("canvas-container").appendChild(this.element)
        canvasArr.push([`c${canvasId}`,name])
        viewCanvas(`c${canvasId}`)
        canvasId++
    }

    center() {
        console.log(window.innerHeight / 2 - this.element.height / 2)
        this.element.style.top = `${window.innerHeight / 2 - this.element.height / 2}px`
        this.element.style.left = `${window.innerWidth / 2 - this.element.width / 2}px`
    }
}

export function viewCanvas(id) {
    canvasArr.forEach(canvas => {
        if (canvas[0] == id) {
            $(id).style.display = "block"
            $(id).style.display = "block"
        } else {
            $(canvas[0]).style.display = "none"
        }
    })
}