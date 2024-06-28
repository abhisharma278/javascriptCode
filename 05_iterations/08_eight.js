// Reduce

// const myNum = [1,2,3]

// const myTotal = myNum.reduce( (acc,curval) =>{
//     console.log(`acc: ${acc} and currval : ${curval}`);
//     return acc + curval
// }, 0 )
// console.log(myTotal);

const shoppingCart = [
    {
        courseName : 'java',
        price :999
    },
    {
        courseName : 'Javascript',
        price :2000
    },
    {
        courseName : 'Python',
        price :1100
    },
    {
        courseName : 'Ruby',
        price :555
    }
]
const priceToPay = shoppingCart.reduce( (acc,item) => { 
    // console.log(`${item.price}`);
    return acc + item.price
},0 )
console.log(priceToPay);