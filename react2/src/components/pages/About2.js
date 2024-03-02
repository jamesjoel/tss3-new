import React, {useState} from 'react'
import './About2.css';

const About2 = () => {

    let [bgcolor, setBgcolor] = useState("gray");

    let demo1 = ()=>{
        setBgcolor("red");
    }
    let demo2 = ()=>{
        setBgcolor("green");
    }
    let demo3 = ()=>{
        setBgcolor("blue");
    }
    let demo4 = ()=>{
        setBgcolor("pink");
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <div onClick={demo1} className='smallbox' style={{backgroundColor : "red"}}></div>
                <div onClick={demo2} className='smallbox' style={{backgroundColor : "green"}}></div>
                <div onClick={demo3} className='smallbox' style={{backgroundColor : "blue"}}></div>
                <div onClick={demo4} className='smallbox' style={{backgroundColor : "pink"}}></div>
            </div>
            <div className='col-md-12'>
                <div className='mainbox' style={{backgroundColor : bgcolor}}></div>
            </div>
        </div>
    </div>
  )
}

export default About2