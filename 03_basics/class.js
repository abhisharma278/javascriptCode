/** @format */
class Product {
	// Prop and beh
	// behaviours->function
	// name;
	// price;
	// rating;
	constructor(n, p, r) {
		console.log('calling th cons');
		this.name = n;
		this.price = p;
		this.rating = r;
	}
    static custom(){
        console.log("calling Static Function");
    }
	display() {
		console.log('Display');
	}
}
const p = new Product('iphone', 60000, 5); //New - Create an Empty Plain Object
//->in the above Piece Of Code we are calling the constructor Method
console.log(p);
p.display();
// Product.custom()
// p.name = "samsung s23"
console.log(p.name);


// class Car {
// 	constructor(brand, model) {
// 		this.brand = brand;
// 		this.model = model;
// 	}
// 	display() {
// 		console.log(`This car brand Is ${this.brand} And Model is ${this.model}`);
// 	}
// }
// const brandName = ['Toyota', 'Honda', 'Ford', 'BMW', 'Audi'];
// const modelName = ['Corolla', 'Civic', 'Mustang', 'X5', 'A4'];
// for (let i = 0; i < brandName.length; i++) {
// 	const cars = new Car(brandName[i], modelName[i]);
// 	cars.display();
// }





// function Product(n,p,r){
//     this.name= n;
//     this.price = p;
//     this.rating = r;
//     return this;

// }
// const  p = new Product ('Mackbook', 250000 , 5)
// console.log(p);

// let x = {
//     p:Product
// };
// x.p('airPods', 10000,5)
// console.log(x);




//This Keyword in js is diff than othwer languge
//This Keywordrefers to the context from other we called
// in this function constructor also\

// if you can return prinintve it is ingored and we return the object refered by this
// if you return custom obj. then the custom obj is returned
// if you don't return anything , then obj referred by this is returned

// const Product = function(n,p,r){
//  this.name = n;
//  this.price = p 
//  this.rating = r;
// }
//  const p  =new Product('iphone',100000,5)
//  console.log(p);




//This is not Working =>Arrow Function
//  const Product = (n,p,r)=>{
//     this.name = n;
//     this.price = p 
//     this.rating = r;
//    }
//     const p  =new Product('iphone',100000,5)
//     console.log(p);



