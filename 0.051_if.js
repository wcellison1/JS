var isCold = true;
var isOff = true;

if(isOff === true){
	console.log("This light is on. It's too bright, dude.");
}
if(isOff){
	console.log("Dude, turn that music off.");
}

//&&=and
if(isOff && isCold){
	console.log("Dude, its freaking");
}

//||=or

if(isOff || isCold){
	console.log("dude you are great");
}
// ! = not
if(!isCold){
	console.log("it is not hot");
}