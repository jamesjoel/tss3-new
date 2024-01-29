function homeloan(emi,r,y) {
    let R = r/12/100;  
    let N =  y*12;
    let a = R*(1+R)**N / [(1+R)**N-1]
    let p = emi/a
    return p;
}

let ans = homeloan(16000,7,30)
console.log(ans)