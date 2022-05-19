
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0, "meerkat"); //Inserts at index 1 and replaces no elements
console.log("The new value of the array will be 'blowfish, meerkat, capricorn, giraffe, turtle'");
console.log(favoriteAnimals);
console.log(`The array has a length of ${favoriteAnimals.length}`);
 
favoriteAnimals.splice(3,1); //Repace 1 element from the array: element #3
console.log(favoriteAnimals);

console.log(`The item you are looking for is at index ${favoriteAnimals.indexOf("meerkat")}`);
favoriteAnimals.splice(1,1);
console.log(favoriteAnimals);