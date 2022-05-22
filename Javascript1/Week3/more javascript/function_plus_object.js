/* 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values. */

const juanGabriel = {
  name: "Juan Gabriel",
  yearOfBirth: 1950,
  countryOfOrigin: "Mexico",
  occupation: "singer",
  famousSong: "Querida"
};

const famousMexicanSinger = (juanGabriel) => {
  for (const key in juanGabriel) {
    console.log("key", key);
    console.log("value", juanGabriel[key]);

  }
}