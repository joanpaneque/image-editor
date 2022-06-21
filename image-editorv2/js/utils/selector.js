export default function $(id) {
    return document.getElementById(id)
}

export function $$(query) {
    return document.querySelector(query)
}