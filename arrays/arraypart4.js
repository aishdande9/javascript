let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 =  ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
holdCabinet1 = holdCabinet1.concat(holdCabinet2);
console.log("------------------concatarray---------------------");
console.log(holdCabinet1);
console.log("--------------------sliced array--------------------");
console.log(holdCabinet1.slice(4,6));

holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
console.log("------------ReverseArray------------------");
console.log(holdCabinet1.reverse());

holdCabinet2 =  ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
console.log("-----------------sortedarray----------------------");
console.log(holdCabinet2.sort());