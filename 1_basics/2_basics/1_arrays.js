const myArr = [0,1,2,3,4,5];
//  arrays methods
//myArr.push(6);
//myArr.push(7);
//myArr.pop();
//console.log(myArr);
//myArr.unshift(0);
//myArr.shift();
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));
//const newArr = myArr.join(); converts array to string
//slice, splice
console.log("A", myArr);

const mnArr = myArr.slice(1,3); //slices out elements into new array without altering the original one
console.log(mnArr);

console.log("b", myArr);
const mnArr2 = myArr.splice(1,3); // splices out elements from new array
console.log(mnArr2);
console.log(myArr);