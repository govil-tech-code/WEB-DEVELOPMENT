let student= {
    name : "varad",
    rollNo : 34,
    subjects : ["math", "english", "hindi"],
}

let {subjects : vishay , ...variable}=student
// subject -> vishay
// let vishay = subjects
// console.log(vishay);


// Object merging using spread operator
let obj1 = {
    name:"nishant",
    phone : 6521786345,
     name : "yash"

}
let obj2 = {
    address : "india",
    adharCard : 736473249877,
} 

let obj3 = {...obj1,...obj2}
// console.log(obj3);

// array & object update...

const arr = [1,2,3,4]
arr [1]="updated"
// console.log(arr);

const obj = {
    name:"kasturi",
    rollNo:23,
    address : null,
}

 obj["name"]="vansh"

//  delete obj.rollNo

// console.log(obj);

// console.log(obj.address?.street);

let arr1 = [1,2,3,4,5]

// arr1.splice(3,0,"hello"); //add
// arr1.splice(1,3)
// console.log(arr1);

// let trimarr=arr1.slice(1,4)
// console.log(trimarr);

// console.log(arr1.indexOf(2));

let res=arr1.find((value)=> {
    return value;
})
// console.log(res);

let arr3=[2,4,1,6,8,9,[3,5,2]]

// console.log(arr3.flat(Infinity));

// mutibility

let arr4=[4,5,6,64,213,13]

// let arrCopy = arr4;
// let arrCopy2 = [...arr4];
// arrCopy2.pop()
// console.log("arr4",arr4);
// console.log("arrCopy",arrCopy2);












