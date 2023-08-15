import React, { createContext } from 'react'
import {contextApi} from 'react'
import App from '../App'
import {About} from '../Routes/About'

export const Home = () => {
    
    const context = createContext({
        name: 'mukul',
        age: 20,
    })


  return (
    <div>
        <context.Provider value={{name:'mukul',age:20}}>
            <App/>
            <About/>
        </context.Provider>
    </div>
  )
}
