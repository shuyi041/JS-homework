const level = document.querySelectorAll("#rating>i")
let max = level.length;
let comment = document.querySelector("#comment");
let thedocFrag = document.createDocumentFragment();
let timer = "";
for (let i = 0; i < max; i++) {
    level[i].addEventListener("click", (event) => {
        //console.log(event)
        //用事件物件的detail去判別按了幾下
        if (event.detail === 1) {
            //用setTimeout防止連點時又觸發下面程式
            timer = setTimeout(() => {
                let count = "";
                //while先判斷是否有comment的文字，若有就全數清除
                while (comment.hasChildNodes()) {
                    comment.removeChild(comment.lastChild)
                };
                //第一個迴圈先將所有的被評分的星星清空
                for (let j = 0; j < max; j++) {
                    level[j].classList.remove("fas");
                    level[j].classList.add("far");
                }
                //第二個迴圈顯示被選中的星星
                for (j = 0; j <= i; j++) {
                    level[j].classList.remove("far");
                    level[j].classList.add("fas");
                    count = j + 1;
                }
                let thespan = document.createElement("span");
                let thetxt = document.createTextNode(`你的評分為${count}顆星`);
                thespan.appendChild(thetxt);
                thedocFrag.appendChild(thespan);
                comment.appendChild(thedocFrag);
            }, 250)
        }
    })
    level[i].addEventListener("dblclick", (evt) => {
        //console.log(evt)
        clearTimeout(timer);
        while (comment.hasChildNodes()) {
            comment.removeChild(comment.lastChild)
        };
        for (let dd = 0; dd < max; dd++) {
            level[dd].classList.remove("fas");
            level[dd].classList.add("far");
        }
    })
}

