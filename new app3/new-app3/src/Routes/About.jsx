import React from 'react'
import { useContext } from 'react'


export const About = () => {
    const {name,age} = useContext(context())
  return (
    <div>
console.log({name})
      console.log({age})
    </div>
  )
}
