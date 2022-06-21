import { control } from "./control/control.js";
import { Menu } from "./menu/menu.js"

// onclick functions
import { popup_new } from "./windows/new.js";
window.popup_new = popup_new


import { viewCanvas } from "./components/canvas.js";
window.viewCanvas = viewCanvas


// Program starts here


// Menu is created
export var menu = new Menu();

// Adds all inputs events
control()
