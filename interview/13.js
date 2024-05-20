// How do you print a Fibonacci sequence 20 ?

// 0 1 1 2 3 5 8 13 21 34 55 89 

let x = 0; 
let y = 1;
console.log(x);
for(let i = 1; i < 7; i++)
{
    console.log(y);  
    let sum = x+y;
    x = y;
    y = sum;  
}

// 0
// 1
// 1
// 2

