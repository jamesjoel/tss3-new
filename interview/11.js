// How do you sort an array of integers in ascending order?

let arr = [14, 12, 6, 9, 25, 400, 2, 814, 651, 81];
// [4, 6, 9, 12, 25]

for(let j=0; j<arr.length; j++)
{
    for(let i = 0; i < arr.length; i++)
        {
            if(arr[i] > arr[i+1])   
            {
                let x = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = x;
            }
        }
}

console.log(arr);

