//task1
var name = prompt("Please, enter your name");
document.write(name);

var year = prompt("Please enter year");
var week = prompt("Please enter weekday");
var date1 = prompt("Please enter date");
var month = prompt("Please enter month name");
var time = new Date();
var today = new Date();

//task2
document.write("Year is: " + year + "<br>");
document.write("Today is " + week + "<br>");
document.write("Date: " + date1 + "<br>");
document.write("Month: " + month + "<br>");
document.write("Current time is " + new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }));

//task3
var date1, date2;
var today = prompt("Enter the today date: 2022-1-31")

         date1 = new Date("2022-6-15");
         today = new Date(today);

var timeDifference = date1.getTime() - today.getTime();
var daysDifference = timeDifference / (1000 * 60 * 60 * 24);
document.write("Days remained until graduation is <br>" + daysDifference + " days");
