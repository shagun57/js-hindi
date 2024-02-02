const marvel_heroes = ['Thor','Ironman','spiderman'];

const dc_heroes = ['superman', 'flash','batman'];

//marvel_heroes.push(dc_heroes); will show array in existing array
//console.log(marvel_heroes); 

//const heroes = marvel_heroes.concat(dc_heroes);    concat returns new array 
//console.log(heroes);


const all_heroes = [...marvel_heroes, ...dc_heroes];
//console.log(all_heroes);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const another_arr1 = another_arr.flat(Infinity); //flatens multiple arrays into one
//console.log(another_arr1);

console.log(Array.isArray('shgaun'));
console.log(Array.from('shagun'));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

