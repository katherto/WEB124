/* Kevin Atherton, WEB 124 JavaScript II, September 10, 2019 */

/* Code modified and adapted from https://courses.wesbos.com/account/access/5d6ec90685f96c03c1e56510/view/194130480

   Here is a list of the possible codes I've programmed and have an effect

    Konami Code: ↑ ↑ ↓ ↓ ← →  ← → b a Enter
    Mortal Kombat Code: a b a c a b b
    Metroid Code: j u s t i n b a i l e y

*/

"use_strict";

var $ = function(id) { return document.getElementById(id); };

// window.onload = function() {

// };

var pressed = []; // changed from const to var because of a known issue I found while testing the Konami code documented later
const specialCode1 = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
const specialCode2 = 'abacabb';
const specialCode3 = 'justinbailey';

function hideDivs() { // this function handles hiding any shown divs from previously entered codes
    const shownDivs = document.querySelectorAll(".show");

    for (let i = 0; i < shownDivs.length; i++) {
        shownDivs[i].setAttribute("class", "hide");
    }
}

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-specialCode1.length - 1, pressed.length - specialCode1.length);

    if (pressed.join('').includes(specialCode1)) { 
        hideDivs();

        $("konamiCode").setAttribute("class", "show"); // displays the div containing an image of Contra's title
        
        const audio = new Audio("sounds/contratitle.mp3"); // creates an audio object containing Contra's title sound and plays it
        audio.play();
        
        // while testing the Konami code, I noticed if you press a bunch of buttons first to load the array then press the Konami code correctly then every keystroke after would trigger the logic so I empty the array to avoid this
        pressed = [];
    } else if (pressed.join('').includes(specialCode2)) {
        hideDivs();
        
        $("mkCode").setAttribute("class", "show");
        const audio = new Audio("sounds/mkshout.mp3");
        
        audio.play();
        
        pressed = [];
    } else if (pressed.join('').includes(specialCode3)) {
        hideDivs();
        
        $("metroidCode").setAttribute("class", "show");
        const audio = new Audio("sounds/metroidstart.mp3");
        
        audio.play();
        
        pressed = [];
    }
})

// lists the possible video game codes I've programmed the script to recognize
$("cheat").addEventListener("click", function() {
    alert("Konami Code: ↑ ↑ ↓ ↓ ← →  ← → b a Enter\nMortal Kombat Code: a b a c a b b\nMetroid Code: j u s t i n b a i l e y");
});