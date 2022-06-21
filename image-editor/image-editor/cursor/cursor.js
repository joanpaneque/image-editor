var currentCur;

export function blockCursor(origin) {
    if (currentCur != "") return

    currentCur = origin;
}

export function unblockCursor(origin) {
    if (currentCur == origin)
    currentCur = undefined
}

// This functions works to avoid overlapping between multiple functionalities that changes the cursor
export function cursor(cur, origin) {
    if (currentCur == undefined) currentCur = origin;
    if (origin == currentCur) {
        document.body.style.cursor = cur;
    }
}


