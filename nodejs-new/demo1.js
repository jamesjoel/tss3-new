let x = ()=>{
    for(let i = 1; i <= 10; i++){
        console.log("***");
    }
}

let y = ()=>{
    console.log("THE STEPPING STONE");
}
let z = (a)=>{
    for(let i = 1; i<=10; i++)
    {
        console.log(i*a);
    }
}

let obj = { x : x, y : y, z : z };

module.exports = obj;