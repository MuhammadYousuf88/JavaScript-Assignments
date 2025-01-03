var date = moment().format('M/D/YYYY h:m A');
console.log(date)

var date1 = moment().format('Do MMMM YYYY');
console.log(date1)

var a = moment(new Date("28 Feb 2025"));
var b = moment(new Date());
var remDaysToRamadan = a.diff(b) / (1000 * 60 * 60)
console.log(Math.round(remDaysToRamadan) + " Hours")

var remDaysToRamadan = a.diff(b) / (1000 * 60 * 60 * 24)
console.log(Math.round(remDaysToRamadan) + " Days")

var remDaysToRamadan = a.diff(b) / (1000 * 60 * 60 * 24 * 30)
console.log(Math.round(remDaysToRamadan) + " Months")

var remDaysToRamadan = a.diff(b) / (1000 * 60 * 60 * 24 * 30 * 12)
console.log(Math.round(remDaysToRamadan) + " Years")

var date2 = moment("20060427", "YYYYMMDD").fromNow();
console.log(date2)

var date3 = moment().endOf('hour').fromNow();
console.log(date3)

var date4 = moment().startOf('hour').fromNow();
console.log(date4)
