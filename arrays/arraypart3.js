let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

cargoHold.splice(3,0,"keys");
console.log(cargoHold);
let index = cargoHold.indexOf('instruction manual');
let x = cargoHold.splice(index,1)
console.log(cargoHold);

cargoHold[2] = 'cat';
cargoHold[3] = 'fob';
cargoHold[4] = 'string cheese';

console.log(cargoHold);
// Insert the string 'keys' at index 3 without replacing any other entries.
// Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).
// Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese'.