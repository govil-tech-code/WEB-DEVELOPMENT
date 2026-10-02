// let product1 = ["iphone", 32848, 75]

// console.log(product1["2"]);
// console.log(typeof product1);


let product2 = {
    name: "iphone",
    prize: 83748,
    avgRating: 4.5,
    discount: 2,
    productname:"iphone",
    printProduct: function() {
        console.log(this.productname);
        
    },
    printDiscount() {
        console.log(this.discount);
        
    }
}

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// let Math2 = {
//     abs(){

//     },
//     ceil(){

//     },
//     floor(){

//     }
// }

// product2.printProduct();

// console.log(product2["discount"]);

// for(value of product1) {
//     console.log(value);    
// }
// product1.forEach(function(value,index) {
//     console.log(value,index);
// })

// function b(num) {
//     num();
//     console.log("b");
// }

// b(function a() {
//     console.log("a");
// })

// for(value in product1) {
//     console.log(value);
    
// }

// product1.forEach(function(value,index) {
//  console.log(value,index);
// })

// let product1 = ["iphone", 32848, 75]

// const [a,b,c]=["iphone", 32848, 75]
// console.log(c);

for([key,value] of Object.entries(product2)) {
    console.log(key,value);
}


let product1 = ["iphone", 32848, 75]

const [a,b,c]=["iphone", 32848, 75]
let arr=[65,32,134,654,554,24]
console.log(...arr);

// console.log(Math.min(65,32,134,654,554,24));

// Math.max()

let x=[1,2]
let y=[3,4]
let d=[...x,...y]
console.log(...d);

