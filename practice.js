let intNum = 1234

let myArr = String(intNum).split("").map((intNum)=>{
    return Number(intNum)
})
console.log(myArr)

// Declare a variable and store an
// integer value
// let num = 235345

// // Here we typecasting the num
// // Splitting the num, so that
// // we got an array of strings
// // Then use map function to
// // convert the array of strings
// // into array of numbers

// let myArr = String(num).split("").map((num) => {
// 	return Number(num)
// })

// console.log(myArr)
