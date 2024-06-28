// FOR
for (let i =0; i <= 40; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best Number");
    }
    // console.log(element);
}
// console.log(elemet);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Look value : ${i}`)
    // console.log(`Table of ${i} :`);;
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value :${j} ans inner loop :${i}`);
        // console.log(i + "*" + j + ' = ' + i * j );
    }
}
const myArray = ['flash','superMan']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
// Break And Contioue

    // for (let index = 1; index <= 20; index++) {
    //     if (index == 5) {
    //         console.log(`detected 5`);
    //         break;
    //     }
    //     console.log(`Value of i is ${index} `);    
    // }

    for (let index = 1; index <= 20; index++) {
        if (index == 5) {
            console.log(`detected 5`);
            continue;
        }
        console.log(`Value of i is ${index} `);    
    }
