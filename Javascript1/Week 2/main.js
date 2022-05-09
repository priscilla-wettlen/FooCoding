
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

let dragQueens = []
console.log('The value of y will be: null');
console.log(dragQueens);
let myAnimals = ["dog", "flamingo", "cockatoo", "cat"]
console.log(myAnimals);
myAnimals[4] = "baby pig";
console.log(myAnimals);


let myString = "this is a test";
console.log(myString);
console.log(myString.length);

let firstName = "Gloria";
let lastName = "Trevi";
let age = 54;
let birthYear = 1968;
let birthPlace = "Monterrey";
let alive = true;

console.log("The value of my variable is " + firstName);
console.log("The value of my variable is " + lastName);
console.log("The value of my variable is " + age);
console.log("The value of my variable is " + birthYear);
console.log("The value of my variable is " + birthPlace);
console.log("The value of my variable is " + alive);

console.log("The type of " + firstName + " is string");
console.log("The type of " + lastName + " is string");
console.log("The type of " + age + " is number");
console.log("The type of " + birthYear + " is number");
console.log("The type of " + birthPlace + " is string");
console.log("The type of " + alive + " is boolean");

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(birthYear));
console.log(typeof(birthPlace));
console.log(typeof(alive));

if(typeof(firstName) ===  typeof(age)) {
    console.log('SAME TYPE')
} else {
    console.log('NOT A CHANCE')
}

if (typeof(lastName) === typeof(birthPlace)) {
    console.log('SAME TYPE');
    
} else {
    console.log('NOT A CHANCE')
}

if (typeof(age) === typeof(alive) || typeof(birthYear)) {
    console.log('SAME TYPE') 
} else {
    console.log('NOT A CHANCE') 
}

var x = 7;
var x = x % 3;
console.log(x);

var y = 500;
var y = y % 85;
console.log('85 fits 5 times into 500 and the remainder is ' + y);

var n = 92;
var n = n % 4;
console.log('4 fits 23 times into 92 and the remainder is ' + n);

var t = 1005;
var t = t % 10;
console.log('10 fits 100 times into 1000 and the remainder is ' + t);

let randomThings = ['shoe', 'pizza', 35, false, 'my mom'];
console.log(randomThings);
console.log('Yes, you may store different data types in a single array');


let q = 6/0;
let r = 10/0;

console.log(Number.isFinite(q));
console.log(Number.isFinite(r));

if (q === r) {
    console.log('Yes, they are equal')
} else {
    console.log("No, they're not equal")
}

if (q === r) {
    console.log('Yes, it is possible to compare infinities')
} else {
    console.log("No, it's not possible to compare infinities")
}

