import { blockCursor, cursor, unblockCursor } from "../../cursor/cursor.js"
import { c } from "../../main.js"

export function penTool() {
    
    if (window.touchingCanvas) {
        blockCursor("penTool")
        cursor("pointer", "penTool")
        c.beginPath()
        


        if (window.mouseDown) {
            console.log("wtf")
            c.moveTo(window.mouseXCanvas - window.mouseXMovement,  window.mouseYCanvas - window.mouseYMovement)
            c.lineTo(window.mouseXCanvas, window.mouseYCanvas)
            c.stroke()
        }
    } else {
        cursor("default", "penTool")
        unblockCursor("penTool")
    }
}