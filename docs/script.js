console.log(num1, num2)
const resultArea = document.getElementById("results");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");
addBtn.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    resultArea.innerText = `${num1} + ${num2} = ${num1 + num2}`;
});

mulBtn.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    resultArea.innerText = `${num1} * ${num2} = ${num1 * num2}`;
});

subBtn.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    resultArea.innerText = `${num1} - ${num2} = ${num1 - num2}`;
});

divBtn.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num2 != 0) {
        resultArea.innerText = `${num1} / ${num2} = ${num1 / num2}`;
    }
    else{
        resultArea.innerText = `Error !! Division by Zero !!`;
    }
});