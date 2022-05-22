/* 
4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
*/

/* 1. Define a function vehicleType */
/* 2. Equate car to 1 and motorbike to 2 */
/* Allow for it to have two parameters: a color and a number, which will
equate to a type of vehicle*/
// **Might use early exit for it

function vehicleType(color, vehicle) {
  if(typeof color !== 'string' && typeof vehicle !== 'number')
    return 'Color must a string and vehicle must be a number'
  if(vehicle > 2)
    return 'Vehicle can only be 1 or 2'
  if(typeof color === 'string' && vehicle === 1)
    return `A ${color} car`
  if(typeof color === 'string' && vehicle === 2)
    return `A ${color} motorcycle`
}
vehicleType('yellow', 2);

//use arrow function to override