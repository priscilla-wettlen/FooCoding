// let myString = "hello,this,is,a,difficult,to,read,sentence";
// console.log("myString", myString);

// const test = myString.split(",").join(" ")
// console.log("test", test);

// const replaced = myString.replace(/,/g, " ")
// console.log("replaced", replaced);

// let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// favoriteAnimals.push("turtle");
// favoriteAnimals.splice(1, 0, "meerkat")
// favoriteAnimals.splice(3, 1)
// const meerkatIndex = favoriteAnimals.indexOf("meerkat");
// favoriteAnimals.splice(meerkatIndex, 1);
// //favoriteAnimals.splice(1, 1);

// console.log("meerkatIndex", meerkatIndex);
// console.log("favoriteAnimals", favoriteAnimals);
// console.log("favoriteAnimals.length", favoriteAnimals.length);

// const sum = (a, b, c) => a + b + c;


// const colorCar = (color) => {
//    console.log("a " + color + " car");
//    console.log(`a ${color} car`);
// }
// colorCar("red")

// const person = { name: "seif", age: 30 }
// const printKeys = (obj) => {
//    for (const key in obj) {
//       console.log("key", key);
//       console.log("value", obj[key]);
//    }
// }
// printKeys(person)

// const vehicleType = (code, color) => {
//    code === 1 ? console.log(`a ${color} car`) : console.log(`a ${color} motorbike`);

//    if (code) {
//       if (code === 1) {
//          console.log(`a ${color} car`);
//       }
//       else if (code === 2) {
//          console.log(`a ${color} motorbike`);
//       }
//       else {
//          console.log("invalid code");
//       }
//    } else {
//       console.log("the number is incorrect");
//    }
// }

// vehicleType(1, "red")


// const vehicle = (color, code, age) => {
//    if (code === 1) {
//       console.log(age === 0 ? `a ${color} new car` : `a ${color} used car`)
//    }
//    else if (code === 2) {
//       age === 0 ? console.log(`a ${color} new motorbike`) : console.log(`a ${color} used motorbike`)

//    }
//    else {
//       console.log("invalid code");
//    }
// }
// vehicle("blue", 1, 0)



// const list = ["motorbike", "caravan", "bike", "car", "scooter"]

// const vehicle = (color, code, age) => {
//    let test = age > 0 ? "used" : "new";
//    for (let i = 0; i < list.length; i++) {
//       if (code === i) {
//          console.log(`a ${color} ${test} ${list[i]}`);
//       }

//    }
// }
// vehicle("Green", 2, 1)


const list = ["motorbike", "caravan", "bike", "car", "scooter"]
const ad = () => {
   let msg = "Amazing Joe's Garage, we service";
   for (let i = 0; i < list.length; i++) {
      if (i === list.length - 1) {
         msg += ` and ${list[i]}s`
      }
      else if (i === 0) {
         msg += ` ${list[i]}s`
      }
      else {
         msg += ` ,${list[i]}s`
      }

   }
   console.log(msg);
}

ad()