const userEmail = [ 2]

if(userEmail){
    // console.log("Got User Email");
}else{
    // console.log("dont have userEmail");
}

//falsy values

// false , 0 ,-0,bigint,"",null.undefined,nan

// truthy value
//  "0",   'false', " " , [] ,{},function(){}

if(userEmail.length === 0){
    // console.log("Array is empty");
}else{
    // console.log("Array is not empty  ");
}

const eoyObj = { name:"abhi" }

if (Object.keys(eoyObj).length === 0) {
    // console.log("object is empty");
}else{
    // console.log("object is nt empty");
}

//Nullish coalsecing Operator (??):null undefined

let val1;
val1 = 5??10    
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);
// console.log(val1);

//Terniary Operator 

// condition ?  true : false;

const iceTeaPrice =100;
// iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("More Than 80");;
