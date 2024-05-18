// How do you find the count for the occurrence of a particular character in a string?

let a = "xfefgEfgerd";
let arr = a.split(""); // [l, s, k, d, i, 0, 9 ]
let counter = 0;
let x = "a"

arr.forEach(item=>{
    if(item.toUpperCase()==x.toUpperCase())
        {
           counter++; 
        }
})
console.log(counter)