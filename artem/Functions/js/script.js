// Function
const strings = [‘a’, ‘b’, ‘d’, ‘c’];

strings.map(function (string) { return string.toUpperCase() }).sort();

//Arrow function

strings.map((string) => { return string.toUpperCase() }).sort();

//Implicit return 

strings.map((string) => string.toUpperCase()).sort();

/*If I do not put curly braces  { }  means I can only do one statement, one line or nothing.
Implicitly calling return for me.*/
