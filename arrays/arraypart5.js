let str = 'In space, no one can hear you code.';

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

let arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));

let words = "water,space suits,food,plasma sword,batteries";

 let arrayWords = words.split(",").sort();
console.log(arrayWords);
let sortedWords = arrayWords.toString();
console.log(sortedWords);