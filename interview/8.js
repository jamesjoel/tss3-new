 //  How do you calculate the number of vowels and consonants in a string?

 let a = "dflgkloerotoaiaiarkldkfg";
 let arr = a.split("");

 let vow = 0;
 let con = 0;
 arr.forEach(item=>{
    if(item=="a" || item=="e" || item=="i" || item=="o" || item=="u")
        {
            vow++;
        }
        else{
            con++;
        }
 })

 console.log(vow)
 console.log(con)