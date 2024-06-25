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