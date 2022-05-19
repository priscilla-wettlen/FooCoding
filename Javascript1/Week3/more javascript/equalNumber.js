/* 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
	if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}

*/

//It's easier to do with a ternary expression

const equalNumber = (x, y) => x === y ? "yes" : "no";
	equalNumber(3,3);