/* Kevin Atherton, WEB 124 JavaScript II, September 17, 2019 */

/* Code modified and adapted from https://courses.wesbos.com/account/access/5d6ec90685f96c03c1e56510/view/194130581 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    // new dayOfWeek variable to print the proper day of the week along with the local and worldwide times
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // const seconds = now.getSeconds(); removed this line and combined with the expression that assigns seconds degrees
    const secondsDegrees = ((now.getSeconds() / 60) * 360) + 90;
    const minutesDegrees = ((now.getMinutes() / 60) * 360) + 90;
    const hoursDegrees = ((now.getHours() / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // displays central time to the user, which is the standard for this site and what the other time zones calculate off of
    $("local-time").textContent = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + dayOfWeek[now.getDay()] + " " + now.getDate() + " Central US";

    // new functionality I've added to go with world times
    var londonHour = now.getHours() + 6;
    if (londonHour >= 24) { // once London's time lapses to the next date, this will handle formatting and displaying the time and date correctly
        $("london-time").textContent = (londonHour - 24) + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + dayOfWeek[now.getDay() + 1] + " " + (now.getDate() + 1) + " London";
    } else {
        $("london-time").textContent = (londonHour) + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + dayOfWeek[now.getDay()] + " " + (now.getDate()) + " London";
    }

    var australiaHour = now.getHours() + 15;
    if (australiaHour >= 24) { // similar handling of Australia's time if they're a date ahead of central US time
        $("australia-time").textContent = (australiaHour - 24) + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + dayOfWeek[now.getDay() + 1] + " " + (now.getDate() + 1) + " Australia";
    } else {
        $("australia-time").textContent = (australiaHour) + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + dayOfWeek[now.getDay()] + " " + (now.getDate()) + " Australia";
    }
}

setInterval(setDate, 1000);