let user = {
    name : "rohit", 
    
};

let {name, ...info} = user;
console.log(name, info);