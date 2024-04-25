import React, {useContext} from 'react'
import Child4 from './Child4'
import DemoContext from './DemoContext'

const Child3 = () => {

  let a = useContext(DemoContext);

  return (
    <>
    <div>Child3</div>
    <h2>{a}</h2>
    <Child4 />
    </>
  )
}

export default Child3