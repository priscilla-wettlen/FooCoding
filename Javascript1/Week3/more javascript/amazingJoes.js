/* 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
*/

//1. Create an array with the vehicle types
const vehicleList =['car', 'motorbike', 'caravan', 'bike']

//2. Create an empty string to host the resulting string
let advertisement = ''


for(let i=0; i < vehicleList.length -1; i ++){
  advertisement = advertisement + vehicleList[i] + 's'+','+' ';
}
	
console.log(`Amazing Joe's Garage. We service ${advertisement} and ${vehicleList[3]+'s'}.`);

/* 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10? 

Not with the code I've written. I would have to change the index of "vehicleList[3]"" to 4 pr another
number, depending on how many new elements I've added
*/