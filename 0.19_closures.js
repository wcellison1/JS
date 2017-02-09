//a closure give you access to the variables set in a function
//after the function has completed and returned.

//Helps keep variables from getting pushed into global scope
//degree of protection. Variables cant be overwritten

var friend= {};

var setAge = function(myAge) {
	var birthday = "7/18/1973";
		return {
			getAge : function() {
				return myAge;
			},
			getBirthday : function() {
				return birthday;
				},
				setBirthday : function(birthday) {
					this.birthday = birthday;
				}
			}
		}

friend.age = setAge(43);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.age.birthday);
console.log(friend.age.getBirthday());
var aurora = {};
aurora.age = setAge(36);
aurora.age.setBirthday("4/12/1980");












