//indexing 01234
// to access the indexwe use[]and the number inside of them
//wet = write everything
//dry = dont repeat
 var name = "James H";
console.log(name.length);
console.log(name[0] + name[1] + name[2] + name[3] + name[4]);
console.log(name[0].toLowerCase() + name[1] + name[2] + name[3].toUpperCase() + name[4]);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

var lcv = 0;//this is a loop control variable
while(lcv < 5) {
	console.log(name.toUpperCase());
	lcv += 1;//this is critical!!! no var leads to infinty
}

//create a while loopthat starts at zero and ends at 10
//this while loop should print each num of the icv
//make yor lcv var count =0


var count = 0
while(count < 10){
	console.log(count);
	count++//++ is equal to count +=1
	}
	console.log("--------------------------");

	var num = 10;
	while(num > 0) {
		console.log(num);
		num -=1;
	}
var evenCount = 0;
while (evenCount < 20){
	if (evenCount % 2 ==0){
		console.log(evenCount + "is even");
	}else {
		console.log(evenCount + "is odd");
	}

	evenCount++;
}
console.log("------------------------");
//create a while loop that will count to 50 by 5
//use the lcv vari of countfive
var countFive = 0
while (countFive <= 50) {
	if (countFive %5 ==0) {
		console.log(countFive);
	}
	countFive++// += shorthand for countfive = countfive +5
}














































































