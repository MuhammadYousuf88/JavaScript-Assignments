var yourAge = new Date(prompt("Enter Your Age"));
var totalDate = new Date();

var yourAgeMilli = yourAge.getTime();
var totalDateMilli = totalDate.getTime();

var finalAgeMilli = totalDateMilli - yourAgeMilli;

var finalAgeDays = Math.round(finalAgeMilli / (1000 * 60 * 60 * 24))
var finalAgeMonths = Math.round(finalAgeMilli / (1000 * 60 * 60 * 24 * 30))
var finalAgeYears = Math.round(finalAgeMilli / (1000 * 60 * 60 * 24 * 365))

document.write("<center><h1>" +finalAgeDays + " " + "Days" + "</h1></center>")
document.write("<center><h1>" +finalAgeMonths + " " + "Months" + "</h1></center>" )
document.write("<center><h1>" +finalAgeYears + " " + "Years"+ "</h1></center>")