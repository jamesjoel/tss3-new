import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { reset } from '../redux/NumSlice';

const CompC = () => {
  let n = useSelector(state=>state);
  let dispatch = useDispatch();
  return (
    <>
    <h3>Num : {n}</h3>
    <button onClick={()=> dispatch(reset())}>Reset</button>
    </>
  )
}

export default CompC