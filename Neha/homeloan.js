function homeloan(P,r,y) {
    let R = r/12/100;  
    let N =  y*12;
    let emi = P*R*(1+R)**N / [(1+R)**N-1]
    return emi;
}

let ans = homeloan(2500000,10.5,20)
console.log(ans)