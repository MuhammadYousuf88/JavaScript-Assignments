var randomValues = "AJHGAjdggh2672e^&(*(7yddjfhjkdfj&*&gjhsfhdfdasjh7229ujeiwe8";
var password = "";

for(var i=0; i<10; i++){
	var randomPassword = Math.floor(Math.random() * 22);
	password += randomValues[randomPassword];
}
document.write("<center><h1>"+ password +"</h1></center>");