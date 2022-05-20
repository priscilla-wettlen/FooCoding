/* 15.Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

Don't cheat! Seriously - try it first. */

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// First case
x == y

// The result is false

//Second case
x === y

//The result is false

//Third case
z == y

//The result is true

//Fourth case
z == x

//The result is false