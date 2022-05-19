/*9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike". */

let vehicleType = ['motorbike', 'caravan', 'car', 'bike']

function vehicle(color, age, sort) {
  switch(age) {
    case 1:
      return `A ${color}, new ${vehicleType[sort]}`
      break
    case 2:
      return `A ${color}, old ${vehicleType[sort]}`
      break
  }
  
}
vehicle('green', 1, 3) //I switched the order of the parameters, but the result is the same