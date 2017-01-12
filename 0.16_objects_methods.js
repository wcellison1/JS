//objects literals with methods
//functions inside an object

var player = {
	//properties
	name : "",// leave blank so you can add names
	life : 100,
	damage :0,

	//methods
	challenge : function(){
		console.log(this.name + " would anyone care to fight?");},
	buy : function(){
		console.log("buy me pizza and beer");
	},
	attack : function(target){
		console.log(this.name + " throws fist" + target.name + " busted lip");
	}
}
var melkor = Object.create(player);
melkor.name = "melkor";

var miley = Object.create(player);
miley.name = "miley";

console.log(melkor.name);
console.log(miley.name);

//access methods
melkor.challenge();
miley.buy();
miley.challenge();
miley.attack(melkor);

























