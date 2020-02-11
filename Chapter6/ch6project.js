/* Kevin Atherton, WEB 124 JavaScript II, October 15, 2019 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

function displayAlt(event) {
    $("imageDescription").textContent = event.target.alt;
}

let images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", displayAlt);
});