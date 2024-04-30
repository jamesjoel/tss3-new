import React from 'react'
import { inc } from '../redux/NumSlice'
import { useDispatch } from 'react-redux'
const CompA = () => {

  let disp = useDispatch();

  return (
    <>
    <button onClick={()=> disp(inc()) }>Inc</button>
    </>
  )
}

export default CompA
/*

let disp = useDispatch();
disp(fun)
  

*/