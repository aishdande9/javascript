// If we want to turn the string 'JavaScript' into 'JS', we might try .remove(). Unfortunately, there is no such method in JavaScript. However, we can use our cleverness to achieve the same result.
// Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'.



 let word = "JavaScript";
 word = word.slice(0,1)+word.slice(4,5);
 console.log(`"The abbreviation for 'JavaScript' is ${word}."`);
 console.log("------------------------");
 let titleString = "title case"
 titleString = titleString[0].toUpperCase()+titleString.slice(1,5)+" "+titleString[6].toUpperCase()+titleString.slice(7);
 console.log("New titleString :"+titleString);