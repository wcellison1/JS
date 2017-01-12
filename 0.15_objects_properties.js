//empty object literal
var emptyObject = {};
//object with properties
var fbFriend = {
	name : "",
	age : 0,
	vocation : "",
	status : true
}

fbFriend.name = "Jona";// the . is a accessor allows you access the 
console.log(fbFriend.name);

fbFriend.age = 40;
console.log(fbFriend.age);
console.log(fbFriend.name + " just turned " + fbFriend.age + ".");

fbFriend.inRelationship = true
if(fbFriend.inRelationship){
	console.log(fbFriend.name + " is in a relationship");
}

var myCar = {
	make : "honda",
	model : "crv",
	year : 2016,
}
console.log(myCar.make + myCar.year + " was stolen");




















