const BTN9 = document.getElementById("botton9");
BTN9.addEventListener("click", () => {
    let maillAdress = document.getElementById("email1").value;
    const check = document.getElementById("mailcheck");
    check.innerHTML = checkMail(maillAdress);
})

//用RegExp去判斷
let re1 = /^[^@\.]+@[^@\.]+\.[^@/.]{2,3}$/
function checkMail(maillAdress) {
    if (re1.test(maillAdress)) {
        return "密碼輸入OK";
    }
    else {
        return "電子郵件需含 @ 與.且@不能放在最前或最後或重複";
    }
}


//用indexof去判斷
// function checkMail(maillAdress) {
//     //使用string物件檢查電子郵件中要有 @. 以及 @ 不能重複
//     if (maillAdress.indexOf("@") < 0 || maillAdress.indexOf(".") < 0) {
//         return "電子郵件中要有 @ 以及.";
//     }
//     else if (maillAdress.indexOf("@") == 0 || maillAdress.indexOf("@") == maillAdress.length - 1) {
//         return "不能將@放在最前面或後面";
//     }
//     else if (maillAdress.indexOf("@") != maillAdress.lastIndexOf("@")) {
//         return "電子郵件不能重複@";
//     }
//     else { return "密碼輸入OK" }
// }
