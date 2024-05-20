// How do you find out if the two given strings are anagrams?
let a = "abc";
let b = "bca";




let arr1 = a.split("");
let arr2 = b.split("");

arr1.sort();
arr2.sort();

let x = arr1.join("");
let y = arr2.join("");

if(x==y)
    {
        console.log("yes")
    }
else{
    console.log("no");
}