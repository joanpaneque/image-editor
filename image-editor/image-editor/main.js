import { Canvas } from "./canvas/canvas.js";
import { toolbox } from "./toolbox/toolbox.js"
import { aside } from "./aside/aside.js";
import { updateAll, loadEvents, keys } from "./events/events.js"


// Start the program setting the aside and the toolbox divs to certain width
aside.setWidth(400)
toolbox.setWidth(85)

// Sets de canvas to 300 x 300 by default
export var cnv = new Canvas(600, 400);
// Gets de context of the constructor class Canvas (cnv)
export var c = cnv.c


window.c = c
// Loads all the events of the program to work
loadEvents()


// Forever loop
loop()
function loop() {

    // Update all visual functionalities
    updateAll()

    // Request a new animation frame
    requestAnimationFrame(loop)
}


