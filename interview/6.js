 // How do you find the non-matching characters in a string?

 
 let a = "xamarmogpdodi"; // xrgpi
 let arr = a.split("");

let data = [];

for(let i = 0 ; i<=arr.length; i++)
{
    let char = arr[i];
    let count = 0;
    for(let j=0; j<=arr.length; j++)
    {
        if(char == arr[j])   
        {
            count++;
        }
    }
    if(count==1)
    {
        data.push(char);
    }
}
let newstr = data.join("");

console.log(newstr)
