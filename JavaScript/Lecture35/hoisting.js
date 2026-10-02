



// console.log(a);
// let a=6;
// const a=6;
// var a=76;

// addNum()

// function addNum() {
//     console.log("Hello");
    
// }

// console.log(addTwoNum);

// var addTwoNum = function() {
//     console.log("function expression");
// }



// console.log(b);
// var a=5;
// let b=7;

// function addNum() {
//     let a=6;
//     console.log(a);
    
// }
// addNum();

var x=6;
function random() {
    console.log(x);
    var x=3; 
}

random()

let city = "Delhi"

// function printcity() {
//     console.log(city);
// }

function random(fn) {
    let city = "Varansi"
    function printcity() {
    console.log(city);
}
return printcity
}
let printcity=random();
printcity()

// console.log(random());


function outter() {
    let username = "nishant"
    function inner() {
    console.log(username);
    
    }
    return inner
}


const inner = outter()
let username = "dhruv"
inner()

function fun1() {
    function fun2() {
        function fun3() {
            function fun4() {
                
            }
        }
    }
}


