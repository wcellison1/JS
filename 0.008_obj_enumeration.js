var name= "joe";
for (name in another_stooge) {
 if (typeof another_stooge[name] !== 'function') {
 console.log(name + ': ' + Another.Stooge[name]);
 }
}
var i;
var properties = [
 'first-name',
 'middle-name',
 'last-name',
 'profession'
];
for (i = 0; i < properties.length; i += 1) {
 console.log(properties[i] + ': ' +
 another_stooge[properties[i]]);
}