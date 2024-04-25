import React from 'react'
import Child1 from './Child1'
import UserContext from './UserContext'
import DemoContext from './DemoContext'

const App = () => {
    let user = [
        {
            id : 1,
            name : "rohit"
        },
        {
            id : 2,
            name : "amar"
        },
        {
            id : 3,
            name : "vijay"
        }
    ]

    let info = "The Stepping Stone";

  return (
    <>
    <div>App</div>

    <DemoContext.Provider value={info}>

    <UserContext.Provider value={user}>


        <Child1 />
    
    </UserContext.Provider>

    </DemoContext.Provider>
    </>

  )
}

export default App