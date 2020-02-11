/* Kevin Atherton, WEB 124 JavaScript II, September 17, 2019 QUIZ 1 */

"use_strict";

var $ = function(id) { return document.getElementById(id); };

//whole quiz code enclosed within an IIFE, checked console afterward to see if company object still existed, and it didn't so that's expected
(function() {
var company = { 
    companyName: "Next Level Streaming",
    industry: "Entertainment",
    employeeCount: 50,
    marketPosition: 7,
    foundedDate: "June 23, 2003",
    annualRevenue: 100000,
    calculateExpectedGrowthRate: function() {
        let expectedGrowthRate = (30 / this.marketPosition) / 100;
        return expectedGrowthRate;
    },
    calculateExpectedRevenueGrowth: function() {
        let expectedRevenueGrowth = this.annualRevenue * this.calculateExpectedGrowthRate();
        return expectedRevenueGrowth;
    },
    calculateProjectedRevenue: function() {
        let projectedRevenueNextFiscalYear = this.annualRevenue + this.calculateExpectedRevenueGrowth();
        return projectedRevenueNextFiscalYear;
    },
    //beginning of extra credit code
    calculateExpectedEmployeeGrowth: function() {
        let expectedEmployeeGrowth = (this.calculateExpectedGrowthRate() * this.employeeCount).toFixed(0);
        return Number(expectedEmployeeGrowth); //this converts the returned string into a number for a later calculation
    },
    calculateProjectedEmployees: function() {
        let projectedEmployeesNextFiscalYear = this.employeeCount + this.calculateExpectedEmployeeGrowth();
        return projectedEmployeesNextFiscalYear;
    }
}

function convertDate(date) {
    let companyDate = new Date(date); //creates a new date object using the parameter passed, which is the company's founding date set when the company object was created

    //in order to properly format the day as dd, assigns the date and adds a 0 if it's a single digit day
    let formattedDay = "" + companyDate.getDate();
    if (formattedDay.length < 2) {
        formattedDay = "0" + formattedDay;
    }

    //similarly to format the month as mm, assigns the month and adds a 0 if it's a single digit month
    let formattedMonth = "" + (companyDate.getMonth() + 1);
    if (formattedMonth.length < 2) {
        formattedMonth = "0" + formattedMonth;
    }

    //method getFullYear doesn't need formatting
    let year = companyDate.getFullYear();

    //creates the properly converted date and assigns it so the function may return it
    let formattedDate = formattedMonth + "/" + formattedDay + "/" + year;
    console.log(company.foundedDate);
    console.log(formattedDate);

    return formattedDate;
}

//this block of code will update the 9 paragraph elements on the web page
$("p1").textContent = "Company Name: " + company.companyName;
$("p2").textContent = "Industry: " + company.industry;
$("p3").textContent = "Employee Count: " + company.employeeCount;
$("p4").textContent = "Market Position: " + company.marketPosition;
$("p5").textContent = "Founded: " + convertDate(company.foundedDate);
$("p6").textContent = "Annual Revenue: $" + company.annualRevenue.toLocaleString();
$("p7").textContent = "Expected Growth Rate: " + company.calculateExpectedGrowthRate().toLocaleString();
$("p8").textContent = "Expected Revenue Growth: $" + company.calculateExpectedRevenueGrowth().toLocaleString();
$("p9").textContent = "Revenue Next Fiscal Year: $" + company.calculateProjectedRevenue().toLocaleString();
$("p10").textContent = "Expected Employee Growth: " + company.calculateExpectedEmployeeGrowth();
$("p11").textContent = "Employees Next Fiscal Year: " + company.calculateProjectedEmployees();
}) ();