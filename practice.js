let num=1234

let numstr=num.toString();
let sum=1 ;
for(let digit of numstr){
    
    sum *= parseInt(digit);
}
console.log("Sum Of Digit is "+sum);



