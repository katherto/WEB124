/* Kevin Atherton, WEB 124 JavaScript II, September 3, 2019 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

// First set of code that executes and changes what's displayed in Paragraph 1
let myName = 'Kevin Christopher Atherton';
let para1 = $('p1');

para1.textContent = myName;

// Second set of code that executes and changes what's displayed in Paragraph 2
let n1 = 10;
let n2 = 17;
let numberSum = n1 + n2;

$('p2').textContent = numberSum;

// Third set of code that executes and changes what's displayed in Paragraph 3
let numberMult = n1 * n2;

$('p3').textContent = numberMult;

// Fourth set of code that executes and changes what's displayed in Paragraph 4
let myNameAddNum = myName + n1;

$('p4').textContent = myNameAddNum;

// Fifth set of code that executes and changes what's displayed in Paragraph 5
let myNameMultNum = myName * n1;

$('p5').textContent = myNameMultNum;

// Sixth set of code that executes and changes what's displayed in Paragraph 6
let ageCompare = 32 >= (n1 * n2);

$('p6').textContent = ageCompare;