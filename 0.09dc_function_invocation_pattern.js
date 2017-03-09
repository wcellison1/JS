// Augment myObject with a double method
myObject.double = function ( ) ) {
 var that = this; // Workaround.

 var helper = function ( ) {
 that.value = add(that.value, that.value);
 };

 helper( ); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double( );
console.log(myObject.getValue( ));