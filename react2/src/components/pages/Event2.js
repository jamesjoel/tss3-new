import React, {useState} from 'react'

const Event2 = () => {

    let [color, setColor] = useState("gray");
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

     let demo1 = ()=>{
        setColor("red");
    }
    let demo2 = ()=>{
        setColor("blue");
    }

    let demo3 = (event)=>{
        setX(event.clientX)
        setY(event.clientY)
    }

  return (
    <div className='container my-3'>
        <div className='row'>
            <div className="col-md-12">
                
                <div onMouseMove={(event)=>demo3(event)} onMouseOut={demo2} onMouseOver={demo1} style={{height : "200px", width : "200px", backgroundColor : color}}></div>
                <h2>X : {x} Y : {y}</h2>
            </div>
        </div>
    </div>
  )
}

export default Event2