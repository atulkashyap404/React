// import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // let myObj = {
  //   username: "Atul",
  //   age: 23
  // }

  // let newArr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind</h1>
      <Card username = "chaiorCode" btnText="click me"/>
      <Card username = "Atul kumar" btnText="Learn more"/>
      
      
    </>
  )
}

export default App
