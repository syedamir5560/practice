let Arr = [1,2,3,4,5,6,7,8]

let sum = Arr.reduce((result , item,index,arr)=>{
    return result *  index;
})

console.log(sum)