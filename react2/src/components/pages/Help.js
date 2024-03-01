import React, {useState} from 'react'
import Box1 from '../shared/Box1'
import Box2 from '../shared/Box2';

const Help = () => {

  let [x, setX] = useState(true);

  let demo1 = ()=>{
    setX(true)
  }
  let demo2 = ()=>{
    setX(false);
  }

  return (
    <>
    <div className='container'>
      <button onClick={demo1}>Box1</button>
      <button onClick={demo2}>Box2</button>
      <br />
      <br />
        {
          x == true ? <Box1 /> : <Box2 />
        }
    </div>
    </>

  )
}

export default Help