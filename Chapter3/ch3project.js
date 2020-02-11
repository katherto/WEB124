/* Kevin Atherton, WEB 124 JavaScript II, September 10, 2019 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

// Beginning of the array section for this project
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct","Nov","Dec"];

months[0] = "January";
console.log(months);

months[1] = "February";

$('p1').textContent = months[0];
$('p2').textContent = months[1];
$('p3').textContent = months[2];

let myBirthdayMonth = "September";
$('p4').textContent = "My birthday is in the month of " + myBirthdayMonth;
$('p5').textContent = "My birthday is in the month of " + months[8];

$('p6').textContent = 'My birthday is in the month of ' + myBirthdayMonth;
$('p7').textContent = 'My birthday is in the month of ' + months[8];

$('p8').innerHTML = "My <em>birthday</em> is in the month of " + myBirthdayMonth;
$('p9').innerHTML = "My <em>birthday</em> is in the month of " + months[8];

// Beginning of the Store Data section of this project, results in console window
let fullName = 'Kevin Atherton';
console.log(fullName);

let salary = 60000;
console.log('$' + salary);

let veteran = false;
console.log('Veteran: ' + veteran);

let friends = ["Max Xiao", "Ryan Potts", "David Woner"];
console.log(friends);

let friendsSalary = [120000, 50000, 70000];
console.log(friendsSalary);

let friend4 = {
    firstName: 'Courtney',
    lastName: 'Crespo',
    desiredSalary: 60000
}
console.log(friend4);