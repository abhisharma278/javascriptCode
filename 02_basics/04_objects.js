//Object.create

const tinderUser = new Object() // this is singleTon Object
// console.log(tinderUser);
const tinderUsers = {}// this is non single Ton Object
// console.log(tinderUsers);

tinderUsers.id  = "1233454"
tinderUsers.name = "Sam"
tinderUsers.isLoggedin = false

// console.log(tinderUsers);

const regularUser = {
    email : "shamUser@gg.com",
    fullName : {
        userFullName : {
            firstName: "Shyam ",
            LastName : "Sharma"
        }
    },
    isLoggedIn : false,
}
// console.log(regularUser.fullName.userFullName);

const obj1 = {0:"a",1:"b"}
const obj2 = {2:"c",3 :"d"}
const obj4 = {3:"e" , 4 :"f"}
// const obj3 = {obj1,obj2}

const obj3 =Object.assign({},obj1,obj4) 
// console.log(obj3);
// console.log({...obj1, ...obj2,...obj4});

const users = [
    {
        id : 1,
        email : "admin@gma.co"
    },
    {
        id : 1,
        email : "admin@gma.co"
    },
    {
        id : 1,
        email : "admin@gma.co"
    }
]
console.log(users[1].email);
// console.log(tinderUsers);
console.log(Object.keys(tinderUsers));
console.log(Object.values(tinderUsers));
console.log(Object.entries(tinderUsers));

console.log(tinderUsers.hasOwnProperty('isLoggedin'));