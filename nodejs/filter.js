let data = [12, 17, 6, 3, 14, 18, 4, 9, 23];

let data2 = data.filter((value, index, array)=>{
    return value > 10;
})

console.log(data2) // [12, 17, undefined, undefined, 14, 18, undefined, undefined 23]