function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");        
}
// sayMyName() 

function addTwoNumbers(number1,number2){// parameters
    // const result = number1+number2
    // return result;
    return number1 +number2
}
const result = addTwoNumbers(3,6)//Arguement

// console.log("Result : ",result);

function loginUserMessage(username ="Sam"){
    // if (!username) {
    //     console.log("please Enter username");
    //     return
    // }
    return `${username} Just Logged In `
}

const showMessage = loginUserMessage()
// console.log(showMessage);

///////////////////////////////////Calculate Cart Price /////////////////////////////

function calculateCartPrice(val1,...num1){
    return num1
}

const cartValue = calculateCartPrice(200,400,600)
// console.log(cartValue);

const user ={
        userName:"Abhi",
        price :199  
}
const anotherUser = {
        userName: "Ramesh",
        price : 200
}
function handleObjects(anyobjects){
        console.log(`USerName is ${anyobjects.userName} and price is ${anyobjects.price}`);
}

// handleObject(anotherUser)

// handleObjects({
//     userName : "Pinnak",
//     price : 100
// })

const newArray = [100,200,300,400]
function  returnSecondValue(getArray){
    return getArray;
}

// console.log(returnSecondValue(newArray));

// console.log(returnSecondValue([
//     200,400,900
// ]));
