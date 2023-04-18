const banner = document.querySelector("#banner");
const adv = document.querySelectorAll("#slider>div");
const picqty = adv.length;
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
const indexbar = document.querySelector(".indexbar")
let docFrag = document.createDocumentFragment();
let index = 0;
let timer = "";

//自動產生索引bar
(function createIndex() {
    for (let a = 0, max = adv.length; a < max; a++) {
        let thei = document.createElement("i");
        thei.classList.add("fas");
        thei.classList.add("fa-window-minimize");
        thei.classList.add("fas2");
        docFrag.appendChild(thei);
    }
    indexbar.appendChild(docFrag);
})()



//自動撥放
auto();
function auto() {
    indexbar.children[index].classList.add("indexNow");
    timer = setInterval(() => {
        index++;
        if (index >= picqty) {
            index = 0;
        }
        changesetting()
    }, 3000)
}

//滑鼠滑進停止撥放
banner.addEventListener("mouseover", () => {
    clearInterval(timer);
})

//滑鼠移開自動撥放
banner.addEventListener("mouseout", auto)

//上一張、下一張
pre.addEventListener("click", movepre);
next.addEventListener("click", movenext);

function movepre() {
    if (index <= 0) {
        index = picqty;
    }
    index--;
    changesetting()
}

function movenext() {
    index++;
    if (index >= picqty) {
        index = 0;
    }
    changesetting()
}

for (let q = 0; q < picqty; q++) {
    indexbar.children[q].addEventListener("click", () => {
        index = q;
        changesetting()
    })
}

function changesetting() {
    for (let i = 0; i < picqty; i++) {
        adv[i].classList.remove("visible");
        adv[i].classList.add("none_visible");
        indexbar.children[i].classList.remove("indexNow");
    }
    adv[index].classList.add("visible")
    indexbar.children[index].classList.add("indexNow")
}