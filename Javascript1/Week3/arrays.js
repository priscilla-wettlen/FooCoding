
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0, "meerkat"); //Inserts at index 1 and replaces no elements
console.log("The new value of the array will be 'blowfish, meerkat, capricorn, giraffe, turtle'");
console.log(favoriteAnimals);

