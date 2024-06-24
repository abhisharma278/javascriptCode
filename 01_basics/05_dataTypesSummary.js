// Primitive
//Call by Value
//7 types:string ,number , boolean , null , undefined , symbol , bigInt

const score =   100;
const scoreValue = 100.2

const isloggedIn = true
const outsideTemp= null;
const userEmail = undefined;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
const bigNumber = 43545456654n;

// console.log(typeof(bigNumber));
//Refernce (non Primitive)

//Array , Object , Functions


const heros = ['superman , batman , spriderman']
let myObj = 
{
    name : "Abhi",
    age : 33,

}

const myfun = function(){
    // console.log("Hello World");
}
//Check

// console.log(typeof(myfun)); 

////////////////////////////////////////////////////////////////////////////////////////

// Stack(Primitive) and Heap (Non Primitive)


// Stack
let myYoutubeName = "AbhiName"

let anotherName = myYoutubeName
anotherName= "code"

//Heap 
// console.log(anotherName);
// console.log(myYoutubeName);

let userone = {
    email : "sharma@gmikl.com",
    upi : "user@ybl",
}

let usertwo = userone;
usertwo.email = "hello.com"
// console.log(userone.email);
// console.log(usertwo.email);