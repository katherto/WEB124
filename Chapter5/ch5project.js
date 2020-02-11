/* Kevin Atherton, WEB 124 JavaScript II, October 8, 2019 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

function getElement() {
    $("computers").style.color = "#00f";
}

function querySelect() {
    document.querySelector(".favorite").style.color = "#f00";
}

function getByClass() {
    let favorites = document.getElementsByClassName("favorite");

    // the returned collection is processed with a for loop to change text color of each item
    for (let i = 0; i < favorites.length; i++) {
        favorites[i].style.color = "#0f0";
    }
}

function getByTag() {
    let h2 = document.getElementsByTagName("h2");
    
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.backgroundColor = "#0f0";
    }
}

function querySelectAll() {
    let favorites = document.querySelectorAll(".favorite");
    
    // leaving the working for loop I originally wrote and experimenting with using forEach method to solidify understanding of that method and arrow functions
    // for (let i = 0; i < favorites.length; i++) {
    //     favorites[i].style.color = "#0ff";
    // }

    favorites.forEach(element => {
        element.style.color = "#0ff";
    })
}

function parentChange() {
    $("networking").parentNode.textContent = "Show me the money!";
}

function prevSiblingChange() {
    $("web").previousSibling.previousSibling.innerHTML = "&#9733; &#9733; &#9733; Information Technology &#9733; &#9733; &#9733;";
}

function nextSiblingChange() {
    $("web").nextSibling.textContent = "Data Science";
}

function changeClass() {
    $("data").className = "favorite";
}

function addElement() {
    let newElement = document.createElement('li');
    let newText = document.createTextNode('Science');

    newElement.appendChild(newText);

    let position = $('data');

    position.appendChild(newElement);
}

function removeElement() {
    let removeElement = $('engines');
    let containerElement = $('autolist').firstChild.nextSibling;

    containerElement.removeChild(removeElement);
}

function hasRemoveAttribute() {
    let elements = document.getElementsByTagName('li');
    
    if (elements[1].hasAttribute('class') && elements[1].getAttribute('class') === 'favorite') {
            elements[1].removeAttribute('class');
    }
}

$("button1").addEventListener("click", getElement);
$("button2").addEventListener("click", querySelect);
$("button3").addEventListener("click", getByClass);
$("button4").addEventListener("click", getByTag);
$("button5").addEventListener("click", querySelectAll);
$("button6").addEventListener("click", parentChange);
$("button7").addEventListener("click", prevSiblingChange);
$("button8").addEventListener("click", nextSiblingChange);
$("button9").addEventListener("click", changeClass);
$("button10").addEventListener("click", addElement);
$("button11").addEventListener("click", removeElement);
$("button12").addEventListener("click", hasRemoveAttribute);