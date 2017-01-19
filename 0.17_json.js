//json is an acronym for Javascript object notation
//nested arrays
var names = [["james", "chris", "lisa"], ["cam", "todd", "mike"]];
console.log(names[0][2])

var items = [
{
"id": 1,
	"name": "green door",
	"price": 12.50,
	"tags":["home", "green", "vinyl"]
},
{"id": 2,
	"name": "red door",
	"price": 12.50,
	"tags":["home", "red", "wood"]
}
];
console.log(items[0].tags[1]);
//console.log(items)

var items = [
{
"id": 3,
	"name": "20 bike",
	"price": 1200.0,
	"tags":["freestyle", "green", "used"]
},
{"id": 4,
	"name": "24 bike",
	"price": 1500.0,
	"tags":["bmx", "red", "chrome"]
}
];
console.log(items[0].tags[0]);

//can you create a for loopthat console logs each objects name

//lcv and i are the same for a for_loop
for (var lcv = 0; lcv<items.length; lcv++){
	console.log(items[lcv].name);
}