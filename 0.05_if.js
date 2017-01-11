var isOn = true;
var isHot = true;

if(isOn === true){
	console.log("This light is on. It's too bright, dude.");
}
if(isOn){
	console.log("Dude, turn that music off.");
}

//&&=and
if(isOn && isHot){
	console.log("Dude, that music is on, and hot");
}

//||=or

if(isOn || isHot){
	console.log("dude you are great");
}
// ! = not
if(!isHot){
	console.log("it is not hot");
}