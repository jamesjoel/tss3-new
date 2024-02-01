let allsum = (...a)=>{
    let ans = a.reduce((acu, value)=>{
        return acu+value;
    })

    console.log(ans)
}


allsum(4, -2, -4, 10, 3);
