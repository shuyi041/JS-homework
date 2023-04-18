const BTN10 = document.getElementById("botton10");
BTN10.addEventListener("click", () => {
    // const year = parseInt(document.getElementById("bronYear").value);
    // console.log(year)
    const yearResult = document.getElementById("year_result");
    const birth1 = document.getElementById("birthday1").value;
    // console.log(yearResult);
    yearResult.innerHTML = yearCalculator(birth1);
})

function yearCalculator(birth1) {
    let myTime = new Date(birth1).getTime();
    let todaytime = new Date().getTime();
    let resultTime = todaytime - myTime;
    let tooneday = 24 * 60 * 60 * 1000;
    let yearOld = parseInt(resultTime / (365 * tooneday));
    let monthOld = parseInt(resultTime / (30 * tooneday));
    let dayOld = parseInt(resultTime / tooneday);
    if (resultTime <= 0) {
        return "咦!是未來人嗎? 請再次確認你的出生年"
    }
    else if (monthOld == 0) {
        return `你今年0歲滿${dayOld + 1}天了`
    }
    else if (yearOld == 0) {
        return `你今年0歲滿${monthOld}個月了`
    }
    else {
        return `你今年${yearOld}歲`
    }
}