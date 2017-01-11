var firstName = "Chris"
var age = 55
var message = firstName + ":" + age

console.log(typeof age)
console.log(typeof message);

//quotes
var greetings = "hi"
console.log(greetings)

var greetings = 'chris says "hi\'s"' //bc of the 's needs \ bf 's
console.log(greetings)

//string methods
console.log(greetings.length) //number of total spaces
console.log(greetings.toUpperCase())
console.log(greetings.toLowerCase())

console.log(greetings.split(""));
console.log(greetings.slice(0,3));

//string challenge
//bronze
var favDrink = "whiskey"
console.log(favDrink);
var favFood = "pizza"
console.log(favFood)
var saying = "I love pizza and whiskey"
console.log(saying);

//silver
var make = "honda"
var model = "crv"
var year = "2016"
var statement = "I drive a 2016 honda crv"
console.log(statement)

//gold
var age = 10

if(age >= 18){
	console.log("you are adult");
}
else{
	console.log("you are minor");
}
















