/* 2.1 We saw that we can pass functions as arguments to other functions. 
Your task is to write a function that takes another function as an argument and runs it. */
function foo() {
  console.log(1+3/2)
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
bar();

/* 2.2 You must write a function that takes 4 arguments.

A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
The function should first generate an array containing values from start value to end value 
(inclusive).

Then the function should take the newly created array and iterate over it, and calling the 
first callback if the array value is divisible by 3.

The function should call the second callback if the array value is divisible by 5.

Both functions should be called if the array value is divisible by both 3 and 5.
 */

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback
  //or go on to next
  
  
}
threeFive();

 //threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,12.14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding