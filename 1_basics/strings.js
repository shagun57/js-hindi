let name = "shagun-monga-vishu";
let myCount = 50;

console.log(`My name is ${name} and my count is ${myCount}`);

let newName = name.substring(0,4);
console.log(newName);
console.log(name.charAt(4));
console.log(name.indexOf('u'));

const anotherString = name.slice(-11,4);
console.log(anotherString);

const newstring1 = "   shagun      ";
console.log(newstring1);
console.log(newstring1.trim());


console.log(name.split('-'));  // will show in array