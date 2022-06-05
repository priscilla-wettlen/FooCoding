/* 1.1 Say you would like to write a program that doubles the odd numbers in an array and 
throws away the even numbers.

Your solution could be something like this: 

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.

*/

const myNumbers = [1, 2, 3, 4];

const doubleOddNumbers = myNumbers.filter(x => x % 2 !==0).map(x => x * 2)
console.log(doubleOddNumbers);

