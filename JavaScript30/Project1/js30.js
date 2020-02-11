/* Kevin Atherton, WEB 124 JavaScript II, September 10, 2019 */

/* Code modified and adapted from https://courses.wesbos.com/account/access/5d6ec90685f96c03c1e56510/view/194130480 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

const inputs = document.querySelectorAll('.controls input');

// new function that will handle the change of spacing with range input
function changeSpacing() {
    const spacing = $("spacing");
    // for some reason I can't type ` without copy pasting it from a clipboard, so rewriting the function also allows me to easily write the string itself with desired units and not use the keyword this
    document.documentElement.style.setProperty('--spacing', spacing.value + 'px');
}

function changeBlur() {
    const blur = $("blur");
    document.documentElement.style.setProperty('--blur', blur.value + 'px');
}

// this is a brand new function which pairs with the border radius control the user can use
function changeRadius() {
    const radius = $("radius");
    document.documentElement.style.setProperty('--radius', radius.value + 'px');
}

// this one function will handle the selection of a new color whether it's initiated from selecting the first or second color for the gradient
function changeColor() {
    const color1 = $("color1");
    const color2 = $("color2");
    document.documentElement.style.setProperty('--color1', color1.value);
    document.documentElement.style.setProperty('--color2', color2.value);
}

function handleUpdate() {
    changeBlur();
    changeColor();
    changeRadius();
    changeSpacing();
}

// I could stand to have another tutorial on how to use forEach as it's more convenient than writing a full for loop
// Also have never seen => so I'm not sure what that does
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));