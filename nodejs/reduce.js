let data = [17, 13, 8, 6, 1, 24, 14, 2, 9, 11];

let ans = data.reduce((acu, value, index, array)=>{
    return acu < value ? acu : value;
})
console.log(ans);