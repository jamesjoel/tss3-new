function gst(p, s, g="male")
{
    // if(s==1)
    // {
    //     let ans = p*5/100;
    //     let price = p+ans;
    //     console.log(price)
    // }
    // if(s==2)
    // {
    //     let ans = p*12/100;
    //     let price = p+ans;
    //     console.log(price)
    // }
    // if(s==3)
    // {
    //     let ans = p*18/100;
    //     let price = p+ans;
    //     console.log(price)
    // }
    // if(s==4)
    // {
    //     let ans = p*28/100;
    //     let price = p+ans;
    //     console.log(price)
    // }

    let ans;
    switch(s){
        case 1 : ans = p*5/100;
                break;
        case 2 : ans = p*12/100;
                break;
        case 3 : ans = p*18/100;
                break;
        case 4 :  ans = p*28/100;
                break;
    }

    let price = (p+ans)*2/100;
    let final_price = p+price+ans;
    console.log(final_price)

}


gst(10000, 2);
gst(35000, 4, "female");