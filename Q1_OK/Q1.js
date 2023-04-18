let btn = document.querySelector("#botton1");
btn.addEventListener("click", () => {
    let kg1 = parseFloat(document.querySelector("#weight1").value);
    let m1 = parseFloat(document.querySelector("#height1").value);
    let BMI_outcome = document.querySelector("#IBM_result")
    BMI_outcome.innerHTML = IBMCheck(kg1, m1);
})

function IBMCheck(kg1, m1) {
    let m2 = m1 / 100;
    let BMI = kg1 / (Math.pow(m2, 2));
    if (!kg1 || !m1) {
        return `請完整輸入你的身高與體重`;
    }
    else if (BMI < 18.5) {
        return `體重過輕，BMI為${BMI.toFixed(2)}`;
    }
    else if (BMI >= 18.5 && BMI < 24) {
        return `健康體重，BMI為${BMI.toFixed(2)}`;
    }
    else if (BMI >= 24 && BMI < 27) {
        return `體重過重，BMI為${BMI.toFixed(2)}`;
    }
    else if (BMI >= 27 && BMI < 30) {
        return `輕度肥胖，BMI為${BMI.toFixed(2)}`;
    }
    else if (BMI >= 30 && BMI < 35) {
        return `中度肥胖，BMI為${BMI.toFixed(2)}`;
    }
    else {
        return `重度肥胖，你的${BMI.toFixed(2)}`;
    }
}