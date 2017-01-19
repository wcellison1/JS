function hello(){
	console.log("Hello world")
}

hello();
//make function with a greeting
function greeting(name){
	console.log("Hi " + name);
}
greeting("jona");

//adding number to functions
function printNumber(){
	console.log(1);
}
printNumber();

function sumNum() { //function wo parameters
	var num1 = 4;
	var num2 = 6;
	var num3 = 10;
	console.log(num2 + num3);
}
sumNum()

function mybudget(w1,w2) { //function w parameters
	console.log(w1 + w2);
}
mybudget(90,25)

function greeting(name){
	return "Hi " + name;
}
var addGreeting = greeting ("Paul") + ", hi";
console.log(addGreeting);

function calPriceInd(quantity, price){
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return totalPrice;
}
console.log(calPriceInd(17,5))

function divNum(num1,num2) {
	 console.log(num1 / num2);
}
divNum(10,10)


var today = new Date();
console.log(today.toDateString());

function checkOdd(num) {
	if (num % 2 === 0){
		return "even"
	}else {
		return "nope"
	}
}
console.log(checkOdd(12))

function checkOdd(num) {
	if (num % 2 === 0){
		return "even, "+ num +" yo"
	}else {
		return "nope," + num + "yo"
	}
}
console.log(checkOdd(14))

//function diByThree(num) {
	//if (num % 3 === 0){
	//	return "yo dog, " + num + "odd"
//}//else
//function greeting(name) {
//	if (name =="paul")}
//		return "hey man nice shot"
//
//else if (name == "jenn")
//	return "OMG Hi"
//}
//else {
//	return "dont talk to me"
//}
//var addGreeting = greeting("James");
function twoStrings(egar, allen){
	return egar + " " + allen
}
console.log(twoStrings("never", "more"))

function myBills(w1,w2,w3,w4){
	console.log(w1 + w2 + w3 + w4);}

myBills(100,200,300,400);

function billz(rent, water){
	var billzTotal = rent + water
	return billzTotal
}
console.log(billz(550, 50));
































//console.log("hello world")
//console.log("hello world")