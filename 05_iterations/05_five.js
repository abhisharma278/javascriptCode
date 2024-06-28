 const coding = ['js','java','cpp','pyton','ruby']

 coding.forEach(function (val){
    // console.log(val);
 })
 coding.forEach((val)=>{
//    console.log(val); 
 })

function addme(item){
    // console.log(item);
}
coding.forEach(addme)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
} )
const myCoding = [
    {
        languageName : 'Javacript',
        languageFile : 'js'
    },
    {
        languageName : 'python',
        languageFile : 'py'
    },
    {
        languageName : 'Java',
        languageFile : 'java'
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageFile);
} )