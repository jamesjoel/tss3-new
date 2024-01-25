let c = 0;
for(let b = 1; b <= 5; b++)
{
    let temp = "";
    for(var a = 1; a <= 5; a++)
    {
        c++;
        temp += c+",";
    }
    console.log(temp);
}
