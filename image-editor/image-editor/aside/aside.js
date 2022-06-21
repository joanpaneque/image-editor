import { as } from "../dom/dom.js";

export class Aside {
    constructor(w) {
        this.setWidth(75);
    }

    setWidth(w) {
        as.style.width = `${w}px`;
        this.width = w;
    }
}

export var aside = new Aside(300);