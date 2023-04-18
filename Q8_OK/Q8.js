// 密碼驗證條件
// 8位數以上
// 至少包含一個大寫字母、小寫字母、數字、符號

//RegExp一次判斷
function checkPwd() {
    const Pwd = document.getElementById("idPwd").value;
    const codeValidate = document.getElementById("idsp");
    codeValidate.innerHTML = codeCheck(Pwd);

}

let codeCheck = (Pwd) => {
    let re2 = /[A-Z]{1,}/g;
    let re3 = /[a-z]{1,}/g;
    let re4 = /[\d]{1,}/g;
    let re5 = /[^A-Za-z\d]{1,}/g;
    let space = ""
    if (re2.test(Pwd) && re3.test(Pwd) && re4.test(Pwd) && re5.test(Pwd) && Pwd.length >= 8) {
        space = "密碼驗正成功!"
    }
    else if (Pwd == "") {
        space = ""
    }
    else { space = "密碼需至少包含一個大寫字母、小寫字母、數字、符號 且八位數以上" }
    return space;
}

//分批判斷
const pwd2 = document.querySelector("#idPwd2");

pwd2.addEventListener("input", check);
function check() {
    //大寫判斷
    const upperletter = document.querySelector("#checklist>li:nth-child(1)>i");
    const re6 = /[A-Z]{1,}/g;
    if (re6.test(pwd2.value)) {
        upperletter.classList.remove("fa-times");
        upperletter.classList.add("fa-genderless");
    }
    else {
        upperletter.classList.remove("fa-genderless");
        upperletter.classList.add("fa-times");
    }
    //小寫判斷
    const lowerletter = document.querySelector("#checklist>li:nth-child(2)>i");
    const re7 = /[a-z]{1,}/g;
    if (re7.test(pwd2.value)) {
        lowerletter.classList.remove("fa-times");
        lowerletter.classList.add("fa-genderless");
    }
    else {
        lowerletter.classList.remove("fa-genderless");
        lowerletter.classList.add("fa-times");

    }
    //特殊符號判斷
    const specailletter = document.querySelector("#checklist>li:nth-child(3)>i");
    const re8 = /[^A-Za-z\d]{1,}/g;
    if (re8.test(pwd2.value)) {
        specailletter.classList.remove("fa-times");
        specailletter.classList.add("fa-genderless");
    }
    else {
        specailletter.classList.remove("fa-genderless");
        specailletter.classList.add("fa-times");
    }
    //數字判斷
    const num = document.querySelector("#checklist>li:nth-child(4)>i");
    const re9 = /[\d]{1,}/g;
    if (re9.test(pwd2.value)) {
        num.classList.remove("fa-times");
        num.classList.add("fa-genderless");
    }
    else {
        num.classList.remove("fa-genderless");
        num.classList.add("fa-times");
    }

    //判斷長度
    const length = document.querySelector("#checklist>li:nth-child(5)>i");
    if (pwd2.value.length >= 8) {
        length.classList.remove("fa-times");
        length.classList.add("fa-genderless");
    }
    else {
        length.classList.remove("fa-genderless");
        length.classList.add("fa-times");
    }
}