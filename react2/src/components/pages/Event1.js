import React, {useState} from 'react'

const Event1 = () => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    let [color, setColor] = useState("black");

   let demo = (a)=>{
    // console.log(a.clientX)
    // console.log(a.clientY)
    setX(a.clientX)
    setY(a.clientY)
   }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h1>Event in React</h1>
                <div onDoubleClick={()=>setColor("red")} onClick={(event)=>demo(event)} style={{height : "300px", width : "300px", backgroundColor : color}}></div>
                <h3>X : {x}   Y : {y}</h3>
            </div>
        </div>
    </div>
  )
}

export default Event1