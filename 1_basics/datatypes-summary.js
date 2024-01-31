// primitive datatypes
// 7 categories : string, number, boolean, null, undefined, symbol, bigInt

//const score = 100;
//const scoreValue = 100.3;

//const isLoggedIn = false;
//const outsideTemp = null;
//let useremail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//reference datatypes (non primitive)
// arrays, Objects, Functions

//const heroes = ["shaktiman", "naagraj", "doga"];
//let myObj = { name : "shagun", age : 30,};

// ---------------------------------------------------------------

// types of memory :
// stack(in primitive datatypes) and heap(in non primitive datatypes)
//in stack we get the copy of variable
//in heap we get the reference of the variable

let myName = "shagun monga";
let anotherName = myName;

console.log(anotherName);

let user1 = {
    email : 'shagun52@gmail.com',
    upi : '1001@xyz',
};
let user2 = user1;

user2.email = 'shagun57@gmail.com';
console.log(user1.email);
console.log(user2.email);