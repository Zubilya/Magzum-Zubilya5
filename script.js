var date1, date2;
var today = prompt("Enter the today date: 2022-1-31")

         date1 = new Date("2022-6-15");
         today = new Date(today);

var timeDifference = date1.getTime() - today.getTime();
var daysDifference = timeDifference / (1000 * 60 * 60 * 24);
document.write("Days remained until graduation is <br>" + daysDifference + " days");
