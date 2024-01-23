let user = {
    name : "rohit",
    age : 25,
    city : "indore",
    detail : {
        gender : "male",
        address : {
            add1 : "palayis",
            add2 : "m. g. road",
            main : {
                houseno : 29,
                rowno : 7,
                address : "gandhi nagar"
            }
        }

    }
};

console.log(user.detail.address.main.address);
