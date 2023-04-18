const BTN4 = document.getElementById("botton4");
BTN4.addEventListener("click", function () {
    const ENTRY = parseInt(document.getElementById("year1").value);
    const yearResult = document.getElementById("year_result");
    yearResult.innerHTML = YearCheck(ENTRY);
})

function YearCheck(ENTRY) {
    if ((ENTRY % 400 == 0) || (ENTRY % 4 == 0) && (ENTRY % 100 != 0)) {
        return `西元${ENTRY}是閏年`;
    }
    else if (ENTRY % 4 != 0 || ENTRY % 100 == 0 && ENTRY != 400) {
        return `西元${ENTRY}是平年`;
    }
    else {
        return `西元${ENTRY}是平年`;
    }
}