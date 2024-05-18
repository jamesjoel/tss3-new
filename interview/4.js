// How do you calculate the number of numerical digits in a string?

let a = "lskdi";
let arr = a.split(""); // [l, s, k, d, i, 0, 9 ]
let counter = 0;
arr.forEach(item=>{
    if(isNaN(item)==false)
        {
           counter++; 
        }
})
console.log(counter)