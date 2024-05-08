// The length method returns how many characters are in a string. However, the method will NOT give us the length of a number. If num = 1001, num.length returns undefined rather than 4.
// Use type conversion to print the length (number of digits) of an integer.

let num = 1001;
num = num.toString().length;
console.log(num);
console.log("-------------------------------------------");



let decNum = 123.45;
// decNum  = decNum.toString().replace(".","");
// console.log(decNum);
if(decNum.toString().indexOf("."))

{
    console.log(decNum.toString().length-1);
}else{
    console.log(decNum.toString().length);
}
