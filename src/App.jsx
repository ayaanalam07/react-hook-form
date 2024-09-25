import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

const App = () => {

  const [counter , setCounter] = useState(0)

  useEffect(()=>{
     axios('https://dummyjson.com/products')
     .then(res => {
      console.log(res)
     }
     ).catch((err)=>{
      console.log(err)
     })
  }, [])

  return (
    <>
    <h1>Hello World {counter}</h1>
    <button onClick={()=>setCounter(counter + 1)}>Add</button>
    <button onClick={()=>setCounter(counter - 1)}>Less</button><br /><br />
    {
      counter >= 19 ? <Card title="Gym addmission" description="Apka addmission ho jayega"/> : counter < 17 ? "Addmission Nahi Hoga"  : counter <= 18 ? "Addmission ho jayega But 1000rs Extra Charges Lagengai" : "Kuch nhi ho sakhta"
    }
    </>
  )
}

export default App