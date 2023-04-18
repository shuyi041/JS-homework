const name1 = document.querySelector("#forname>input");
const code1 = document.querySelector("#forcode>input");

const date1 = document.querySelector("#fordate>input");

name1.addEventListener("blur", () => {
    const nameresult = document.querySelector("#forname>span");
    const icon = document.querySelector("#forname>span>i");
    icon.style.visibility = "visible";
    icon.innerHTML = nameCheck(icon);
});

const nameCheck = (icon) => {
    let nameTR = "";
    if (!name1.value) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        nameTR = `名字不可為空白`
    }
    else if (name1.value.match(/[^\u4E00-\u9FA5]/)) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        nameTR = "名字必須全為中文"
    } else if (!name1.value.match(/[\u4E00-\u9FA5]{2,}/)) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        nameTR = "名字須為兩個字以上"
    }
    else {
        icon.classList.remove("fa-exclamation-circle");
        icon.classList.add("fa-check");
        nameTR = `OK`
    }
    return nameTR
}

code1.addEventListener("blur", () => {
    const coderesult = document.querySelector("#forcode>span");
    const icon = document.querySelector("#forcode>span>i");
    icon.style.visibility = "visible";
    icon.innerHTML = codeCheck(icon);
});

const codeCheck = (icon) => {
    let codeTR = "";
    if (!code1.value) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        codeTR = `密碼不可為空白`
    }
    else if (!code1.value.match(/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#\$%\^&\*])/)) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        codeTR = "密碼須包含英數字與特殊字元"
    }
    else if (!code1.value.match(/[A-Za-z\d!@#\$%\^&\*]{6,}/)) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        codeTR = "密碼長度需六位數以上"
    }
    else {
        icon.classList.remove("fa-exclamation-circle");
        icon.classList.add("fa-check");
        codeTR = `OK`
    }
    return codeTR;
}

date1.addEventListener("blur", () => {
    const dateresult = document.querySelector("#fordate>span");
    const icon = document.querySelector("#fordate>span>i");
    icon.style.visibility = "visible";
    icon.innerHTML = dateCheck(icon);
});

const dateCheck = (icon) => {
    let dateTR = "";
    let validdate = /(^\d{4}\/(0(1|[3-9])|1[012])\/(0[1-9]|[12]\d|30)$)|(^\d{4}\/(0[13578]|1[02])\/(0[1-9]|[12]\d|31)$)|(^\d{4}\/02\/(0[1-9]|1\d|2[0-8])$)|(^(\d{2}([13579][26]|[2468][048]|0[48]))|(([13579][26]|[2468][048]|0[48])00))\/02\/29$/;
    let validformat = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!date1.value) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        dateTR = `日期不可為空白`
    }
    else if (date1.value.match(validdate)) {
        icon.classList.remove("fa-exclamation-circle");
        icon.classList.add("fa-check");
        dateTR = `OK`
    }
    else if (!date1.value.match(validdate) && date1.value.match(validformat)) {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        dateTR = `查無此日期`
    }
    else {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-exclamation-circle");
        dateTR = `日期格式錯誤，須為yyyy/mm/dd`

    }
    return dateTR;
}

