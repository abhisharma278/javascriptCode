const obj  = {
    js : 'Javascript',
    cpp : 'c++',
    rb:'ruby',
    py: 'pyton',
    swift :'swift by Apple'
} 
for (const key in obj) { 
    // console.log(`${key} Shortcut is for ${obj[key]}`);
}

myArr = [1,2,3,4,5,6]
for (const key in myArr) {
    // console.log(myArr[key]);
}

const map = new Map()
map.set('IN' , 'india')
map.set('USA' , 'United State Of America')
map.set('fr','france')

for (const key in map) {
   console.log(key);
}