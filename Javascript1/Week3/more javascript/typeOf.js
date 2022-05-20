/*
17. What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;


‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.

*/

let bar = 42;
typeof typeof bar;


//The code returns  'string'. it does this because if we just check /typeof bar/ it would return 'number'. 'Number' written as it is, is a string. Therefore /typeof typeof bar/ is a string.

typeof bar //returns 'number'
typeof typeof bar //returns 'string'