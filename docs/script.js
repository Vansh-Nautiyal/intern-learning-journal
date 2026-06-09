function getInput() {
    let inp1 = document.getElementById("num1").value;
    let inp2 = document.getElementById("num2").value;

    if (inp1 === "" || inp2 === "") {
        resultArea.innerText = "Please fill both the values !!";
    }
    else {
        return {
            num1: Number(inp1),
            num2: Number(inp2)
        };
    }

}

function showHistory(calculation) {
    let li = document.createElement("li");
    li.innerText = calculation;
    historyList.prepend(li);
}

const resultArea = document.getElementById("results");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");

const historyList = document.querySelector("#history");

let history = [];
let result = "";

/* Load old history from Local Storage */
const savedHistory = localStorage.getItem("history");
if (savedHistory) {
    history = JSON.parse(savedHistory);
    for (let i = 0; i <history.length; i++) {
        showHistory(history[i]);
    }

}

/* Addition */
addBtn.addEventListener("click", function () {
    const values = getInput();
    if (values) {
        let num1 = values.num1;
        let num2 = values.num2;
        result = `${num1} + ${num2} = ${num1 + num2}`;

        resultArea.innerText = result;

        history.push(result);
        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );
        showHistory(result);
    }

});

/* Multiplication */

mulBtn.addEventListener("click", function () {
    const values = getInput();
    if (values) {
        let num1 = values.num1;
        let num2 = values.num2;
        result = `${num1} * ${num2} = ${num1 * num2}`;

        resultArea.innerText = result;

        history.push(result);
        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );
        showHistory(result);
    }

});

/* Subtraction */
subBtn.addEventListener("click", function () {
    const values = getInput();
    if (values) {
        let num1 = values.num1;
        let num2 = values.num2;
        result = `${num1} - ${num2} = ${num1 - num2}`;

        resultArea.innerText = result;

        history.push(result);
        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );
        showHistory(result);
    }

});

/* Division */

divBtn.addEventListener("click", function () {
    const values = getInput();
    if (values) {
        let num1 = values.num1;
        let num2 = values.num2;
        if (num2 != 0) {
            result = `${num1} / ${num2} = ${num1 / num2}`;
            resultArea.innerText = result;

            history.push(result);
            localStorage.setItem(
                "history",
                JSON.stringify(history)
            );

            showHistory(result);
        }
        else {
            resultArea.innerText = "Error !! Division by Zero !!";
        }
    }

});

/* Theme Toggle */
const themeBtn = document.querySelector("#themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark"){
    document.body.classList.add("dark-theme");
    themeBtn.innerText = "Light Mode";
}
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerText = "Light Mode";
        localStorage.setItem("theme","dark");
    }
    else {
        themeBtn.innerText = "Dark Mode";
        localStorage.setItem("theme","light");
    }
});

const clearHistoryBtn = document.querySelector("#clearHistory");
clearHistoryBtn.addEventListener("click",()=>{
    history = [];
    historyList.innerHTML = "";
    localStorage.removeItem("history");
})