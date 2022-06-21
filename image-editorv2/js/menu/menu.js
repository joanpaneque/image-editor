import { canvasArr } from "../components/canvas.js";
import $, { $$ } from "../utils/selector.js" 

export class Menu {
    constructor() {
        this.object = document.createElement("ul");
        this.object.setAttribute("class","nav site-nav")
        this.object.setAttribute("id","m0")
        $("menu").appendChild(this.object)

        this.createDropdown("File","file")
        this.appendElementToDropdown("New","file", "popup_new()")
        this.createDropdown("View","view")
        this.appendDropdownToDropdown("file","view","filedropdown")
        this.appendElementToDropdown("No files created","filedropdown", "alert(`This file doesn't exist`)")
    }


    createDropdown(name, id) {
        let flyout = document.createElement("li")
        flyout.setAttribute("class","flyout")

        let a_name = document.createElement("a")
        a_name.setAttribute("class","rounded")
        a_name.innerText = name

        let dropdown = document.createElement("ul")
        dropdown.setAttribute("class","flyout-content nav stacked")
        dropdown.setAttribute("id",id)
    
        flyout.appendChild(a_name)
        flyout.appendChild(dropdown)
        $("m0").appendChild(flyout)
    }

    appendElementToDropdown(name, id, action) {
        let element = document.createElement("li")
        let a_element = document.createElement("a")
        a_element.setAttribute("onclick", action)
        a_element.innerText = name

        element.appendChild(a_element)
        $(id).appendChild(element)
    }

    appendDropdownToDropdown(name, id, thisId) {
        let flyout_alt = document.createElement("li")
        flyout_alt.setAttribute("class",`flyout-alt ${id}_${thisId}`)

        let a_name = document.createElement("a")
        a_name.innerText = name

        let dropdown = document.createElement("ul")
        dropdown.setAttribute("id", thisId)
        dropdown.setAttribute("class","flyout-content nav stacked")

        flyout_alt.appendChild(a_name)
        flyout_alt.appendChild(dropdown)

        $(id).appendChild(flyout_alt)


    }

    menu_updateViewFiles() {
        $$(".view_filedropdown").remove()
        this.appendDropdownToDropdown("file","view","filedropdown")
        if (canvasArr.length == 0) return this.appendElementToDropdown("No files created","filedropdown", "alert(`This file doesn't exist`)")
        canvasArr.forEach(canvas => {
            this.appendElementToDropdown(canvas[1],"filedropdown",`viewCanvas("${canvas[0]}")`)
        })
    }
}


