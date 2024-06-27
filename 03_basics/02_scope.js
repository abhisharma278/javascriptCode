var c =300
let a = 1199
if (true) {
    let a = 10;
    const b =20;
    var c = 30;
    // console.log(`inner - ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Abhi"
    function two(){
        const website = 'Youtube'
        // console.log(username);
    }
    // console.log(website);
    two()
}
one();

if (true) {
    const userName= "Abhi"
    if (userName === "Abhi") {
        const website = "www.com"
        // console.log(userName + website);
    }
    // console.log(userName);
}
// console.log(userName);

///////////////////////////////another Example

//Hoisting

console.log( addOne(5)); // This is Exacuate

function addOne(num){
    return num +1
}

// addTwo(5)// This is Not Exuacuate
const addTwo = function(num){
    return num +2
}


//
function one(){
    const Email = "Abhi@gmail.com"
    // console.log(Email);
    function two(){
        const websites = "youtube"
        console.log(Email);
    }
    two()
    // console.log(websites);
}

// console.log(Email);
one()
