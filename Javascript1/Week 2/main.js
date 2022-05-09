
console.log('Hello world!');
console.log('Hola mundo!');
console.log('Hej världen!');

console.log("I'm awesome"); 
/* The error was that single quotes were used both to write the string and as an apostrophe. The
solution was to simply substitute the outside single quotes for double quotes */


/* I'm only using var in this assignment because when I used const or let with an undeclared or repeated value it 
would mark an error */

var x
console.log('The value of x will be: undefined');
console.log(x);
var x = 5;
console.log('The value of x will be: 5');
console.log(x);


var y = 'Brtiney Spears';
console.log('The value of y will be: Britney Spears');
console.log(y);
var y = 'Madonna';
console.log('The value of y will be: Madonna');
console.log(y);


let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let b = Math.max(z, a);
console.log(b);