//objects in singleton or declared with help of constructor

// const tinderUser = new Object();   //singleton object
const tinderUser ={};              //non singleton object
tinderUser.id = "123abc";
tinderUser.name = "shagun";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {                             //nesting of objects
    email : "someone@gmail.com",
    fullName : {
        userFullname : {
            firstName : "shagun",
            lastName : "Monga"
        }
    }
}

//console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

//const obj3 = Object.assign(obj1,obj2);  //concat 2 objects into one

const obj3 = {...obj1,...obj2};      //easier way to concat 2 objects by using ...
//console.log(obj3);


const users = [
    {
        id: 1,
        email : "shagun@gmail.com"
    }
]

//users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));          // filter out keys from object
console.log(Object.values(tinderUser));        //filter out values from objects
//these both return result in array so now we can loop this array 