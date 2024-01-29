
function loan(p, r, y)
{
    let i = p*r*y/100; // 40000
    let amt = p+i; // 340000
    let month = y*12;  // 60
    let emi = amt/month;
    
    return emi; // return value not variable "emi"
}

let x = loan(300000, 8.5, 5);
console.log(x)