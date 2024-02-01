let demo = (a, b)=>{
    return {
        name : "rohit",
        info : ()=>{
            return {
                ans : a+b
            }
        }
    }
}

let a = demo;
let b = a(7, 10);
let c = b.info;
let x = c();

// console.log(x.ans)

console.error("hello")

