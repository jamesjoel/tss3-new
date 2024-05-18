// How do you determine if a string is a palindrome?

let a = "rohit";
let arr = a.split("");
let arr2 = arr.reverse();
let b = arr2.join("");

if(a==b){
    console.log("yes")
}else{
    console.log("no");
}