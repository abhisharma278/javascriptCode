const marvalHeros = ["thor", "ironMan" , "SpriderMan"]
const dc = ["superMan" , "Flash" , "batman"]
// marvalHeros.push(dc) 

// console.log(marvalHeros);
// console.log(marvalHeros[3][2]);

// const allHeros = marvalHeros.concat(dc) 
// console.log(allHeros);

//Spread Operator

// const allNewHeros = [...marvalHeros, ...dc]
// console.log(allNewHeros);

//One Array 

// const realArray = [1,3,5,6,[3,6,6,7,5,],6,[4,6,4,64],11]
// console.log(realArray.flat(Infinity));

console.log(Array.isArray("hitish"))

// Convert In Array
console.log(Array.from("hitish"));

//

let array1 = 100;
let array2 = 200;
let array3 = 300;

console.log(Array.of(array1,array2,array3));