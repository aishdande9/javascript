//Replace

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];


cargoHold[5] = 'space tether';
console.log(cargoHold);

//pop
 console.log("Element removed :"+(cargoHold.pop()));

console.log("orginal array :"+" "+cargoHold);

console.log(cargoHold);
//shift 
cargoHold.shift();
console.log(cargoHold);
//Add the items 1138 and ‘20 meters’ to the array - the number at the start and the string at the end.
// Print the updated array to confirm the changes.

cargoHold.unshift(1138)+cargoHold.push('20 meters');

console.log(cargoHold);

let len = cargoHold.length;

console.log(`The final output of an array is : ${cargoHold} 

length of th array is ${len}` )




