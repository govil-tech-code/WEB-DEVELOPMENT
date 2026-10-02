let originalprices = [463, 654, 2346]
    let discountPrices = []
// for(value of originalprices) {
//     discountPrices.push(value *0.9)  //10% discount
// }

originalprices.forEach((value) => {
    discountPrices.push(value*0.9)
})

// console.log(originalprices);
// console.log(discountPrices);

const discountPrices2 = originalprices.map((value)=> {
    return value*0.9
})

// console.log(discountPrices2);

let students = [
    {
        name:"Ayaan",
        marks : 46,
    },
    {
        name : "shivam",
        marks : 30,
    },
    {
        name : "Aladin",
        marks :28,
    }
]

// let studentNames = []
// students.forEach((value)=> {
//     studentNames.push(value.name)
// })

const studentNames = students.map((student)=> student.name)
const studentMarks = students.map((student)=>student.marks)
// console.log(studentNames);
// console.log(studentMarks);

let boostedmarks = students.map((student)=>{
    return {...student,marks : student.marks + 10}
})
//  console.log(boostedmarks);
 
// let failedStudents = []

// students.forEach((student )=> {
//  if(student.marks < 33) {
//     failedStudents.push(student)
//  }
// })
// console.log(failedStudents);

// const failedStudents = students.filter((student) => student.marks < 33)

//  console.log(failedStudents);

let marks = [56,34,65,76]
// let totalMarks = 0 

// marks.forEach((mark)=>totalMarks+=mark)
const totalMarks = marks.reduce((accumulator , currentValue) => {
      accumulator = accumulator+currentValue
      return accumulator;
}, 0)
console.log(totalMarks);
 


 