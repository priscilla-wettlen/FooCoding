/*6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car' */

function vehicleType(color, age, vehicle) {
  if(typeof color !== 'string' && typeof age !== 'number' && typeof vehicle !== 'number')
    return 'Color must a string; age must be a number; and vehicle must be a number'
  if(vehicle < 1 || vehicle > 2)
    return 'Use numbers 1 or 2 to determine the type of vehicle'
  if(age < 4 || age > 5)
    return 'Use numbers 4 or 5 to determine the condition of vehicle'
  if(typeof color === 'string' && age === 4 && vehicle === 1)
    return `A ${color}, new car`
    if(typeof color === 'string' && age === 5 && vehicle === 1)
    return `A ${color}, used car`
  if(typeof color === 'string' && age === 4 && vehicle === 2)
    return `A ${color}, new motorcycle`
    if(typeof color === 'string' && age === 5 && vehicle === 2)
    return `A ${color}, used motorcycle`
}
vehicleType('purple', 5, 1);