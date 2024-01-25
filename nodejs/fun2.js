// declaration of a function
function calc(a=1, b=1, c=1)
{
    
    let x = a*b;
    let y = x/c;

    console.log(y);
}


// calling of a function
//calc(100, 50, 10); // first time
//calc(500, 30, 5); // second time
//calc(170, 50, 2); // third time
//calc(2, 170, 5);

calc();
calc(100)
calc(500, 50)
calc(500, 50, 2)


