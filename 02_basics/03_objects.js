//SingleTon
//Object.create
//Object Literals

const mysym = Symbol("key1");

const jsUser = {
    name : "Abhi",
    "fullName" :"Abhi Sharma",
    [mysym]: "key1",
    age :18,
    Location: "Jaipur",
    Email: "Abhi@gooogle.com",
    isLoggedIn : false,
    lastLoginDetails:['Monday', 'Saturday'  ]
}
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser.fullName);
// console.log(jsUser[mysym]);

jsUser.Email = "asd.chat.com"
// Object.freeze(jsUser)
jsUser.Email = "sdfj.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello js User , ${this.name}`);
}


console.log(jsUser.greetingTwo());