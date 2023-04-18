let num = Math.random() * 100;
let finalnumber = Math.floor(num);
console.log(finalnumber);
let gameResult = document.querySelector("#guess_result");
const BTN3 = document.querySelector("#botton3");
BTN3.addEventListener("click", () => {
    let keyin = parseInt(document.querySelector("#guess1").value);
    if (keyin == 0) {
        gameResult.innerHTML = `離開遊戲`;
        BTN3.disabled = "disabled";
    }
    else if (keyin == finalnumber) {
        gameResult.innerHTML = `恭喜你猜對了,終極密碼為${finalnumber}`;
    }
    else if (keyin > finalnumber) {
        gameResult.innerHTML += `數字太大，終極密碼為1~${keyin}</br>`;
    }
    else {
        gameResult.innerHTML += `數字太小，終極密碼為${keyin}~100</br>`;
    }
}
)



//用迴圈並彈出視窗玩
// while (true) {
//     let enter = window.prompt("請輸入1~100");
//     if (enter == 0) {
//         window.alert("離開遊戲");
//         break;
//     }
//     else if (enter == finalnumber) {
//         window.alert("恭喜答對");
//         break;
//     } else if (enter > finalnumber) {
//         window.alert("數字太大");
//     }
//     else { window.alert("數字太小"); }
// }