const user = {
    userName : "Abhi",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to Website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.userName = "Harmeet";
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     const userName = "chai"
//     console.log(this.userName);
// }
// chai()

// const chai= function(){
//     let userName = "Abhi"
//     console.log(this.userName);
// }
// chai()

// const chai =()=>{
//     let userName = "Abhi"
//     console.log(this.userName)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 +num2
// }
// console.log(addTwo(4,66));
const addTwo = (num1,num2) =>  num1 +num2 // Impicit Return
console.log(addTwo(11,44));
const addThree = (num1,num2,num3) => (num1+num2+num3)
console.log(addThree(11,33,44));
const name = ()=> ({name: "Abhi"}) 
console.log(name());


const myArray = [2,4,6,8,8]
myArray.forEach(() =>{
    
})