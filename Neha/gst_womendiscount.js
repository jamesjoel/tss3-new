function gst(p, s, g="male")
{
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
    let price = (p+ans)*2/100 ;
    let final_price = p+price+ans;
    
    if(g=="female") {
        let dis = final_price*90/100;
        console.log(dis)
        
    }
    else {
        console.log(final_price)
    }
   

}


gst(10000, 2,);
gst(10000, 2 ,"male");
gst(10000, 2 ,"female");
gst(35000, 4, "female");