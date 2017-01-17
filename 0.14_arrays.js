//this is how to create a js
  //            0       1     2       3
var names = ["paul", "gav","vern", "lisa"];
var nums = [1, 2, 3, 4, 5,];
var mixed = ["dog", false, 6, "squirrel", 2]
console.log(names[2]);
console.log(nums[4]);
console.log(mixed[3]);

console.log(names);
for(name in names){
	console.log(names[name]);
}
var favCandy = ["spk","mm", "sweettart"];
console.log(favCandy);
console.log(favCandy[1]);
console.log(favCandy[3]);
favCandy.push("pbc");// adds a new value to the array
console.log(favCandy);
favCandy.pop();// removes the last added
console.log(favCandy);

//how to remove a specific element of an array
//.indexOf will return the index of where a value is located in the array
console.log(favCandy.indexOf("spk"));
//.spice will allow us to remove the item from the array
favCandy.splice(0,1);
console.log(favCandy);

















