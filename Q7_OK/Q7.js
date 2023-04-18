const txt1 = document.getElementById("text1");
const txt2 = document.getElementById("text2");
txt1.addEventListener("input", () => {
    if (!txt1.value) { txt2.value = "" }
    else { txt2.value = `${toF()}°F` }
})

txt2.addEventListener("input", () => {
    if (!txt2.value) { txt1.value = "" }
    else { txt1.value = `${toC()}°C` }
})

function toF() {
    let F = (txt1.value * 9 / 5) + 32;
    return F.toFixed(2);
}

function toC() {
    let C = (txt2.value - 32) - 32 * 5 / 9;
    return C.toFixed(2);
}