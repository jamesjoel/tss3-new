// How do you reverse a string?

let a = "rohit";
//let arr = a.split(); // ["rohit"]
// let arr = a.split(""); // ["r", "o", "h"]
// let arr = a.split("h"); // ["ro", "it"]

let arr = a.split("");
let arr2 = arr.reverse();
let b = arr2.join("");

console.log(b);
