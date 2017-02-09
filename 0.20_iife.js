//immediately invoked functionexpression

//create a greeting function- take name parameter
//this is called a function expression

var greeting = function(name) {
	console.log("hello " + name);
}("jona");//new iife way
//greeting("chris")// old way

(function( value){
	console.log(value)
})(15)

var myIIFE =(function() {
	var privateVar = "secrets";

	return {
		reveal: function() {
			console.log(privateVar);
		}
	}
})();
console.log(myIIFE.privateVar);
myIIFE.reveal();