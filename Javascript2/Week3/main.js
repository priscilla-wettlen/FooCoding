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

/* 
1.2 Underneath you see a very interesting small insight in Maartje's work:

Note: the durations are specified in minutes.

Write a program that computes how much Maartje has earned by completing these tasks, 
using map and filter. For the 'summing part' you can try your luck with reduce; alternatively, 
you may use forEach or a for loop.

Follow these steps. Each step should build on the result of the previous step.

Map the tasks to durations in hours.
Filter out everything that took less than two hours (i.e., remove from the collection)
Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
Choose variable and parameters names that most accurately describe their contents or purpose. 
When naming an array, use a plural form, e.g. durations. For a single item, use a singular form, 
e.g. duration. For details, see Naming Conventions.
Don't forget to use =>.
*/

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

//Map the tasks to durations in hours.
const taskDays = [monday.map(x => x.duration), tuesday.map(x => x.duration)]
//console.log(taskDays);

//Filter out everything that took less than two hours (i.e., remove from the collection)
const filteredHours = [taskDays[0].filter(x => x >= 120), taskDays[1].filter(x => x >= 120)];
console.log(filteredHours)


//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.

const totalHours = filteredHours[0].concat(filteredHours[1])

const sum = totalHours.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

totalEarnings = (sum / 60) * 20

//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
console.log(`Maartje's total earnings for two days of work were €${totalEarnings}.00`);
