var userValue = prompt("Enter your Value to check...");


var userFinalValue = userValue.split("").reverse().join("");


if(userValue===userFinalValue){
	document.write(userFinalValue)
	document.write("<br />Your word is Palindrome word😊")
}
else{
	document.write("Your word isn't Palindrome word😕")
}