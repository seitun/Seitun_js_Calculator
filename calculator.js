var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");
var btn7 = document.getElementById("btn-7");
var btn8 = document.getElementById("btn-8");
var btn9 = document.getElementById("btn-9");
var btn0 = document.getElementById("btn-0");

var dotBtn = document.getElementById("btn-dot");
var equalBtn = document.getElementById("btn-equal");
var plusBtn = document.getElementById("btn-plus");
var minusBtn = document.getElementById("btn-minus");
var multiBtn = document.getElementById("btn-multiply");
var divBtn = document.getElementById("btn-divide");
var backBtn = document.getElementById("btn-backspace");
var clearBtn = document.getElementById("btn-clear");

var dispValElement = document.getElementById("display");

var numBtns = document.getElementsByClassName("cal-btn-num");
var funcBtns = document.getElementsByClassName("cal-btn-func");

var dispVal = "0";
var pendingVal;
var evalstringArray = [];

var updateDisplay = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if (dispVal === "0") {
        dispVal = "";
    }
    dispVal += btnText;
    dispValElement.innerText = dispVal;

}
var performFunc = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch (operator) {
        case "+":
            pendingVal = dispVal;
            dispVal = "0";
            dispValElement.innerText = dispVal;
            evalstringArray.push(pendingVal);
            evalstringArray.push("+");
            break;

        case "-":
            pendingVal = dispVal;
            dispVal = "0";
            dispValElement.innerText = dispVal;
            evalstringArray.push(pendingVal);
            evalstringArray.push("-");
            break;

        case "x":
            pendingVal = dispVal;
            dispVal = "0";
            dispValElement.innerText = dispVal;
            evalstringArray.push(pendingVal);
            evalstringArray.push("*");

        case "/":
            pendingVal = dispVal;
            dispVal = "0";
            dispValElement.innerText = dispVal;
            evalstringArray.push(pendingVal);
            evalstringArray.push("/");

        case "=":
            evalstringArray.push(dispVal);
            var evaluation = eval(evalstringArray.join(" ")) // 
            dispVal = evaluation + "";
            dispValElement.innerText = dispVal;
            evalstringArray = [];
        default:
            break;
    }
}

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", updateDisplay, false)
}
for (let i = 0; i < funcBtns.length; i++) {
    funcBtns[i].addEventListener("click", performFunc, false)
}


clearBtn.onclick = () => {
    dispVal = "0";
    dependingVal = undefined;
    evalstringArray = [];
    dispValElement.innerHTML = dispVal;
}
backBtn.onclick = () => {
    let lengthOfDispVal = dispVal.length;
    dispVal = dispVal.slice(0, lengthOfDispVal - 1);

    if (dispVal === "")
        dispVal = "0";
    dispValElement.innerText = dispVal;
}
dotBtn.onclick = () => {
    if (!dispVal.includes("."))
        dispVal += "."
    dispValElement.innerHTML = dispVal;
}