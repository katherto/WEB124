/* Kevin Atherton, WEB 124 JavaScript II, September 24, 2019 */

/* Code modified and adapted from https://courses.wesbos.com/account/access/5d6ec90685f96c03c1e56510/view/194128157 */

"use_strict";

const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
    console.log(topOfNav);

    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        // changed method from using .classlist.add to .setAttribute as I'm more familiar
        // with that method and wanted to test if I could accomplish the same task
        document.body.setAttribute('class', 'fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        // repeated the setAttribute method change to "remove" the class and accomplish the same task
        document.body.setAttribute('class', '');
    }
}

window.addEventListener('scroll', fixNav);