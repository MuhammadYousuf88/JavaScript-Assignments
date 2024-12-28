

var userGender = prompt("Enter Your Gender","Male");
var userAge = prompt("Enter Your Age",18);


if(userGender.toLowerCase() === "Male".toLowerCase()){
	document.write("<center><h1>Welcome Sir!</h1></center>")
}
else if(userGender.toLowerCase() === "Female".toLowerCase()){
	document.write("<center><h1>Welcome Madam</h1></center>")
}
else{
	document.write("<center><h1>Sorry</h1></center>")
}






if(userAge > 18){
	document.write("<center><h1>Yes! You're Eligible</h1></center>")
}
else if(userAge == 18){
	document.write("<center><h1>Are Your Sure!</h1></center>")
}
else{
	document.write("<center><h1>sorry</h1></center>")
}