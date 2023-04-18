// document.write("<table style='border:3px solid pink; border-spacing:0; text-align:center; width:50%;'>");
// document.write("<tr>");
// for (let i = 1; i <= 9; i++) {
//     document.write("<td style='border:1px solid pink; column-gap:5px;'>");
//     for (let j = 1; j <= 9; j++) {
//         document.write(`${i} x${j}=${i * j}<br>`);
//     }
//     document.write("</td>");
// }
// document.write("</tr>");
// document.write("</table>");

let table99 = document.querySelector("#table9");
table99.innerHTML = outcome99();
function outcome99() {
    let result99 = ""
    for (let i = 1; i <= 9; i++) {
        let space1 = "";
        for (let j = 1; j <= 9; j++) {
            space1 += `${i} x ${j} = ${i * j}<br/>`;
        }
        result99 += `<td>${space1}</td>`;
    }
    return result99;
};
