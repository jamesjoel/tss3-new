// How do you find the maximum element in an array?
let arr = [7, 4, 16, 10, 17, 21, 9];

let ans = arr.reduce((acu, item)=>acu > item ? acu : item)
