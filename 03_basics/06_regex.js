/** @format */

let pattern = 'Abhishek';
let regExOne = new RegExp(pattern);
let flag = 'gi';
let regExTwo = new RegExp(pattern, flag);
// console.log(regExTwo);
let regExThree = /pw/gi;
const strToCheck =
	'dldfggjgdkgjdgdkjgdgdkjggjkgkjgddoddkjpwpwpwwpwpwpwpwwpwpwwpwpwwpwpwwpwpwwpwp';
const result = regExThree.test(strToCheck);
// console.log(result);
const anotherResult = strToCheck.match(regExThree);
// console.log(anotherResult);
const oneMore = strToCheck.replace(regExThree, 'p-w');
// console.log(oneMore);
const url = 'https://www.example.com/abhi%20sharma';
const useurl = url.replace(/%20/, '-');
console.log(useurl);
