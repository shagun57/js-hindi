//two ways literals and construtor
//objects created with construtors creates singleton
//object literals :-

const mySym = Symbol("key1");   //creates symbol
const jsUser = {
    name:"Shagun",
    [mySym] : "key1",         //symbol in objects
    age: 30,
    location : "mohali",
    email : "shagun57@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}
//console.log(jsUser.location);  //one way to access objects elements
//console.log(jsUser['email']);
//console.log(jsUser[mySym]);

//jsUser.email = "shagun27@gmail.com";  changes value of object
//Object.freeze(jsUser);      freezes object i.e  now no changes will occur in object.
//console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello user");
}

jsUser.greetingsTwo = function(){
    console.log(`hello js user, ${this.name}`);  //string interpolation $ sign to access the property of object
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

console.log (jsUser);
