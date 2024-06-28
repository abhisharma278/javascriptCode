// For of

["","",""]
[{},{},{}]

const arr = [1,3,54,6,7]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Heello"
for (const greet of greeting) {
    // console.log(greet);
}

// MAP

const map = new Map()
map.set('IN' , 'india')
map.set('USA' , 'United State Of America')
map.set('fr','france')
// console.log(map);

for (const [key,value] of map) {// Key And Value Different 
    // console.log(key, ":-" ,value);
}

const myObj = {
    'game1' : 'nfs',
    'game2' : 'spriderMan'
}
// for (const Key  of myObj) {
//     console.log(Key);
// }

