let arr = ["red", "green", "blue", "yellow", 4, 7, 15, 10, 8, 20];

let i = 1;
for(let x of arr)
{
    if(i <= 3)
    {
        console.log(x)
    }else{
        break;
    }
    i++;
}