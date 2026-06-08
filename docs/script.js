function  getInput(){
    let inp1 = document.getElementById("num1").value;
    let inp2 = document.getElementById("num2").value;

    if (inp1 === "" || inp2 === ""){
        resultArea.innerText= "Please fill both the values !!";
    }
    else{
        return {
            num1 : Number(inp1),
            num2 : Number(inp2)
        }
    }
}
const resultArea = document.getElementById("results");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn")
const divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", function () {
    const values = getInput();
    if (values){
        let num1 = values.num1;
        let num2 = values.num2;
        resultArea.innerText = `${num1} + ${num2} = ${num1 + num2}`;
    }
    else{
        return;
    }
});

mulBtn.addEventListener("click", function () {
    const values = getInput();
    if (values){
        let num1 = values.num1;
        let num2 = values.num2;
        resultArea.innerText = `${num1} * ${num2} = ${num1 * num2}`;
    }
    else{
        return;
    }
});

subBtn.addEventListener("click", function () {
    const values = getInput();
    if (values){
        let num1 = values.num1;
        let num2 = values.num2;
        resultArea.innerText = `${num1} - ${num2} = ${num1 - num2}`;
    }
    else{
        return;
    }
});

divBtn.addEventListener("click", function () {
    const values = getInput();
    if (values){
        let num1 = values.num1;
        let num2 = values.num2;
        if (num2 != 0) {
            resultArea.innerText = `${num1} / ${num2} = ${num1 / num2}`;
        }
        else{
            resultArea.innerText = `Error !! Division by Zero !!`;
        }
    }
    else{
        return;
    }
});

const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        themeBtn.innerText = "Light Mode";
    }
    else{
        themeBtn.innerText = "Dark Mode";
    }
})