/* Kevin Atherton, WEB 124 JavaScript II, Quiz 2, October 1, 2019 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

function addInput() {
    let input = $("num").value;
    let result = "";
    let calculation = 0;

    for (let i = 1; i <= 10; i++) {
        calculation = i + parseInt(input);
        result += i + " + " + input + " = " + calculation + "<br/>";
        // since the break tag is included with the resulting string that's building, innerHTML has to be used to reflect the formatting to the user
        $("addition").innerHTML = result;
    }
}

function subtractInput() {
    let input = $("num").value;
    let result = "";
    let calculation = 0;
    let i = 1;

    while (i <= 10) {
        calculation = i - parseInt(input);
        result += i + " - " + input + " = " + calculation + "<br/>";
        $("subtraction").innerHTML = result;
        i++;
    }
}

function multiplyInput() {
    let input = parseInt($("num").value);
    let result = "";
    let calculation = 0;
    let i = 1;

    do {
        calculation = i * input;
        result += i + " &times; " + input + " = " + calculation + "<br/>";
        $("multiplication").innerHTML = result;
        i++;
    } while (i <= 10);
}

function divideInput() {
    let input = parseInt($("num").value);
    let result = "";
    let calculation = 0;
    let i = 1;

    for (let i = 1; i <= 10; i++) {
        calculation = i / input;
        result += i + " &divide; " + input + " = " + calculation.toFixed(2) + "<br/>";
        $("division").innerHTML = result;
    }
}

function modulusInput() {
    let input = parseInt($("num").value);
    let result = "";
    let calculation = 0;
    let i = 1;

    for (let i = 1; i <= 10; i++) {
        calculation = i % input;
        result += i + " % " + input + " = " + calculation + "<br/>";
        $("modulus").innerHTML = result;
    }
}

function calculateInput () {
    addInput();
    subtractInput();
    multiplyInput();
    divideInput();
    modulusInput();
}

document.querySelector("[value='Calculate!']").addEventListener("click", calculateInput);