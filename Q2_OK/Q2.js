let drawOutcome = document.querySelector("#tree");

let BTN2 = document.querySelector("#button2");
BTN2.addEventListener("click", () => {
    drawOutcome.innerHTML = "";
    let treeHeight = parseInt(document.querySelector("#treeHeight1").value);
    drawOutcome.innerHTML = drawing(treeHeight);
})

function drawing(treeHeight) {
    let tempSpace = ""
    for (let i = 1; i <= treeHeight; i++) {
        let o = "";
        let upPosition = treeHeight + i;
        let downPosition = treeHeight - i;
        if (i >= treeHeight - 1) {
            for (let j = 1; j <= 2 * treeHeight - 1; j++) {
                if (j != treeHeight) {
                    o += "&nbsp;&nbsp;";
                } else {
                    o += "^";
                    continue;
                }
            }
        }
        else {
            for (let j = 1; j <= 2 * treeHeight - 1; j++) {
                if (j >= upPosition || j <= downPosition) {
                    o += "&nbsp;&nbsp;";
                } else {
                    o += "^";
                }
            }
        }
        tempSpace += o + "<br>";
    }
    return tempSpace;
}


/* //老師提示的
for (let j = 1; j <= 2 * i - 1; j++) {
        {
            drawOutcome.innerHTML += ""
            let mid = (15 - j) / 2;
            if (j <= 5 || j >= 7) {
                o += "^";
            } else {
                o += "&nbsp;&nbsp;";
            }
        } */