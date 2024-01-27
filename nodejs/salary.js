function bonus(s, l)
{
    if(l <= 20)
    {
        let b = s*50/100;
        return b;
    }else if(l < 40 && l > 20)
    {
        let per = 50 - (l%20);
        let b = s*per/100;
        return b;
    }
    else{
        let per = 50 - l;
        let b = s*per/100;
        return b;

    }
}

let emp1 = bonus(100000, 23); // 47
console.log(emp1)
let emp2 = bonus(100000, 19); // 50
console.log(emp2)
let emp3 = bonus(100000, 20); // 50
console.log(emp3)
let emp4 = bonus(100000, 28); // 42
console.log(emp4)
let emp5 = bonus(100000, 43); // 10
console.log(emp5)

/*
    21%20     -   49
    22%20      -   48
    23%20      -   47

*/