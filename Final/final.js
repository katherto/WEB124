/* Kevin Atherton, WEB 124 JavaScript II, October 22, 2019 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

let userColors = [];

// First Objective - Manipulate the DOM
function manipulateDOM() {
    const colorPicker = $("colorPicker");
    const selectedColor = colorPicker.value;
    const target = $("colorPicker").previousElementSibling;

    target.style.color = selectedColor;
}

// Second Objective - Add HTML document nodes
function addItem() {
    const newListItem = document.createElement("li");
    const newText = document.createTextNode($("listItem").value);

    newListItem.appendChild(newText);
    $("userItems").appendChild(newListItem);

    $("listItem").value = "";
    $("listItem").focus();
}

// Second Objective - Remove HTML document nodes
function removeItem() {
    const list = $("userItems");
    const target = list.lastElementChild;

    list.removeChild(target);
}

// Third Objective - Control the BOM
function stateStuff() {
    const userItem = $("userItem").value;
    window.history.pushState({}, "Hello World", "#" + userItem);
    const historyItems = window.history.length;

    $("historyLength").textContent = historyItems;
}

// Fourth Objective - Enhance and validate form data
function greetUser(e) {
    e.preventDefault();

    const userName = $("userName").value;

    if (!userName || 0 === userName.length) {
        $("error").textContent = "Make sure to type your username before getting greeted!";
    } else {
        $("error").textContent = "";
        alert("Greetings " + userName + "!");
    }
}

// Fifth Objective - Create scripts using built-in JavaScript classes.
function checkSolution() {
    const num1 = parseInt($("random1").textContent);
    const num2 = parseInt($("random2").textContent);
    const solution = num1 + num2;
    const userAnswer = parseInt($("mathAnswer").value);

    if (isNaN(userAnswer)) {
        $("mathResult").textContent = "Please enter a numerical answer!";
    } else if (userAnswer === solution) {
        $("mathResult").textContent = "Congrats, that's correct!";
    } else {
        $("mathResult").textContent = "Sorry, that's incorrect!";
    }
}

// Sixth Objective - Manipulate data in strings and arrays
function addColor () {
    userColors.push($("userColor").value);

    $("userColor").value = "";
    $("userColor").focus();

    $("colorArray").textContent = userColors.join(", ");
}

function sortColor () {
    userColors.sort();

    $("colorArray").textContent = userColors.join(", ");
}

// Seventh Objective - Validate JavaScript and apply advanced debugging techniques
function changeColor() {
    const orderedList = document.querySelector("ol");

    console.log(orderedList);
    console.log(orderedList.firstChild);
    console.log(orderedList.firstChild.nextElementSibling);
    console.log(orderedList.firstChild.nextElementSibling.nextElementSibling);
    console.log(orderedList.firstChild.nextElementSibling.nextElementSibling.nextElementSibling);
    console.log(orderedList.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

    orderedList.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "#FF0000";
}

// Eighth Objective - Apply coding techniques to address JavaScript security issues
function secureDemonstration() {
    const phrase = $("phrase").value;
    const htmlPhrase = "<b>" + phrase + "</b>";

    $("innerHTMLDemonstration").innerHTML = htmlPhrase;
    $("textContentDemonstration").textContent = htmlPhrase;
}

// Fifth Objective - Create scripts using built-in JavaScript classes.
window.onload = function () {
    $("random1").textContent = Math.floor(Math.random() * 100) + 1;
    $("random2").textContent = Math.floor(Math.random() * 100) + 1;
}

$("colorChange").addEventListener("click", manipulateDOM);
$("addItem").addEventListener("click", addItem);
$("removeItem").addEventListener("click", removeItem);
$("greetUser").addEventListener("submit", greetUser);
$("mathSolve").addEventListener("click", checkSolution);
$("demonstrate").addEventListener("click", secureDemonstration);
$("submitColor").addEventListener("click", addColor);
$("sortColor").addEventListener("click", sortColor);
$("pushHistory").addEventListener("click", stateStuff);
$("changeColor").addEventListener("click", changeColor);