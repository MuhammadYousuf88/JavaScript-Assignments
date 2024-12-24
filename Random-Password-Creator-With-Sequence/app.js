var capitalLetter = "JDFDJFBDNBJVJDSNMDNDBFDHBB";
var smallLetter = "jdjsdjbfednfdmjnbfjdsk";
var numbers = "39087438742874287483";
var symbols = "@(#(@)!(#!)&$$@)()*$?/&*!+"

var password = "";

for(var i=0; i<3; i++){
	var capitalfor = Math.floor(Math.random() * capitalLetter.length);
	password += capitalLetter[capitalfor]
}

for(var j=0; j<3; j++){
	var smallfor = Math.floor(Math.random() * smallLetter.length);
	password += smallLetter[smallfor]
}

for(var k=0; k<3; k++){
	var numbersfor = Math.floor(Math.random() * numbers.length);
	password += numbers[numbersfor]
}
for(var l=0; l<3; l++){
	var symbolsfor = Math.floor(Math.random() * symbols.length);
	password += symbols[symbolsfor]
}

document.write("<center><h1>"+ password + "</h1></center>")