/** @format */

const oneArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

const thirdArray = oneArray.concat(secondArray);
// console.log(thirdArray);

const fourthArray = [...oneArray, ...secondArray]; //Spread Operator
// console.log(fourthArray);

/////////////////////////////////////////////////////////

function manyArguments() {
	let args = Array.from(arguments);
	let finalArr = args.map((e) => e);
	console.log(finalArr);
}
function manyArguments1(...args) {
	console.log(typeof args);
	let finalArr = args.map((e) => e);
	console.log(finalArr);
}
// manyArguments1(1,2,3)
// manyArguments1(1,2,3,4,5,6,7)

///////////////////////////////////////////
let newSet = new Set();
console.log(newSet.size);
const myAee = [1, 2, 3, 4, 2];
let newSets = new Set(myAee);
// console.log(newSets);
// console.log(newSets.add(9));
// console.log(newSets.has(911));
// console.log(newSets.clear());

function setDifference(setA, setB) {
	return new Set([...setA].filter((el) => !setB.has(el)));
}
