(function chai() {
    //Named IIfe
    console.log("DataBaseConnected");
})();
((name) => {
    //unNamed Iife
    console.log(`database Connected Two ${name}`);
})("Abhi");


(function Abhi(){
    console.log( "data");
})();

(() => { 
    console.log("connect");
})();

(() => {
    console.log("Demo Data");
})();