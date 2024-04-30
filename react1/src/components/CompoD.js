import React, {useState} from 'react'
import {add} from '../redux/NumSlice';
import { useDispatch } from 'react-redux'

const CompoD = () => {
    let disp = useDispatch();
    let [x, setX] = useState("");

  return (
    <>
    
        <label>Insert Number</label>
        <input type='text' value={x} onChange={(event)=>setX(event.target.value)}/>
        <button onClick={()=> disp(add(x))}>Add</button>
    </>
  )
}

export default CompoD