import { useState } from 'react'
let Contact = ()=>{

    // let a = 10;

    let [a, x] = useState(20);

    let demo = ()=>{
       x(100);
    }

    let demo2 = ()=>{
        x(5000);
    }



    return(
        <>
            <h1>Contact Page</h1>
            <h2>{a}</h2>
            <button onClick={demo} className="btn btn-info">OK</button>
            <button onClick={demo2} className='btn btn-danger'>Reset</button>
        </>
    )
}

export default Contact;