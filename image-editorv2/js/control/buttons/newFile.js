import { Canvas } from "../../components/canvas.js";
import { menu } from "../../main.js";
import $ from "../../utils/selector.js";

export function button_newFile_create() {
    $("button_newFile_create").onclick = () => {
        let projectName = $("input_newFile_name").value
        let width = $("input_newFile_width").value
        let height = $("input_newFile_height").value

        new Canvas(width, height, projectName, this)

        $("popup_newFile").style.display = "none"

        menu.menu_updateViewFiles()
        console.log(projectName, width, height)
    }
}