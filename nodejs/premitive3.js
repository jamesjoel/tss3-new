let user = {
    name : "rohit",
    age : 25,
    city : "indore",
    salary : 10000
};

let {...temp} = user;


user.name = "amar";
user.age = 27;
user.city = "mumbai";
user.salary = 12000;


console.log(temp);
console.log(user);
