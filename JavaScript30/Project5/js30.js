/* Kevin Atherton, WEB 124 JavaScript II, October 22, 2019 */

/* Code modified and adapted from https://courses.wesbos.com/account/access/5d6ec90685f96c03c1e56510/view/194158691 */

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft <= 0) {
            clearInterval(countdown);
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;

    // adjusting remainder seconds before displaying to avoid ternary operator usage
    if (remainderSeconds < 10) {
        remainderSeconds = '0' + remainderSeconds;
    }

    const display = `${minutes}:${remainderSeconds}`;

    timerDisplay.textContent = display;

    // additional code that will use the page title to show the timer is up rather than leaving it at 00:00
    if (minutes == 0 && remainderSeconds == 0) {
        document.title = "Time is up!";
    }   else {
            document.title = display;
    }
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    let hour = end.getHours();

    // the use of ternary operators was neat, but in a bid to make the code more readable I adjusted the hours and minutes before they're displayed
    if (hour > 12) {
        hour -= 12;
    }

    let minutes = end.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    endTime.textContent = `Be Back At ${hour}:${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});