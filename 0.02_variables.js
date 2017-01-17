//this variable is a string type
var firstname = "chris"
var lastname =	"ellison"
var fullname = firstname + " " + lastname
//concatenation (this is where you can build or combine strings)
console.log(firstname + " " + lastname);

//empty variables
var num = //has not been defined yet

num = 2 // has been defined
console.log(num);

//empty string
var petsName = "" //not defined string

petsName = "tucker" // defined string

console.log(petsName);

//short hand operators
var age = 44
//console.log(1+=1);//sees this error as 1=1+1
console.log(age += 1);
//console.log(age /=2)
console.log(age*=2);

var twoNite ="wednesday night"
console.log(twoNite);

//bronze challenge
var numberOfPets = 2
console.log(numberOfPets);

var myCars = 4
console.log(myCars);

var myHomes = 16
console.log(myHomes);

var myCats = 1
console.log(myCats);

var numberOfBottles = 130
console.log(numberOfBottles);

//silver challenge
var myNumber = 0

console.log(myNumber+= 10);
console.log(myNumber-=1);
console.log(myNumber*=9);
console.log(myNumber/=7);

//gold chanllenge
var age = 44
var maxAge = 144
var numberPerDay = 4
var totalNeeded = (numberPerDay * 365) * (maxAge - age);
console.log(totalNeeded);
