function homeloan(emi,r,y) {
    let R = r/12/100;  
    let N =  y*12;
    let a = R*(1+R)**N / [(1+R)**N-1]
    let p = emi/a
    return p;
}

let ans = homeloan(15000, 10.5, 20)
console.log(ans)