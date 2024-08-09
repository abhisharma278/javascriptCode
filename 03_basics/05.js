/** @format */

let arr = [2, 4, 6, 7];
arr.forEach(function (e) {
	// console.log(e);
});
arr.forEach((index) => {
	// console.log("arrow : ",index);
});

const heros = ['saktiMan', 'doga', 'Maniraj'];
heros.forEach(function (e) {
	// console.log(e.toUpperCase());
});
heros.map(function (e) {
	// console.log(e.toLowerCase());
});
// heros.map((e)=>console.log(e.toUpperCase()))

arr.map(function (e) {
	// console.log(e);
});
//Filter

console.log(heros);
const herosWithRaj = heros.filter((h) => {
	return h.endsWith('raj');
});
// console.log(herosWithRaj);

//ShoppingCart

const cartBill = [20, 40, 50];
const sumOfCart = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCart);

const gameScore = [200, 300, 310, 250, 150];
//Check if all values are numbers
// console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number');
console.log(gameScoreCheck);

//Finds score Above 200
const above200 = gameScore.find((s) => s > 200);
console.log(above200);

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 9;

// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

const array = [1, 5, 8.9, 5, 55, 2, 45];

function lastDigit() {
	const element = array[array.length - 1]; // Access the last element
	console.log(element); // Print the last element
}
function highestDigit(arr) {
	max = 0;
	for (i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	console.log(max);
}
function lower(arr) {
	let low =arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < low) {
			low = arr[i];
		}
	}
    console.log(low);
}
function sortArr(arr){
    return arr.slice().sort((a,b)=>a-b)
}
function nameShortner(name , maxLength){
    if(name.length >maxLength){
        return name.substring(0,maxLength) + "..."
    }
    return name;
} 
function nameShorter_2(name){
    const newParts= name.split(' ')
    const firstName = newParts[0];
    lastName = newParts.length > 1 ? newParts[newParts.length-1].charAt(0).toUpperCase() :  ''
    return firstName + ' '+ lastName + '.'
}
console.log(nameShorter_2("Abhi Sharma"));
console.log(nameShortner('Abhishek',3));
const high = Math.max(...array);
const lowest = Math.min(...array);
// console.log(lowest);
// console.log(high);
// highestDigit(array) // call the Function
// lastDigit(); // Call the function
// lower(array);
// console.log(sortArr(array));