import React, { useState } from 'react'
import './App.css'
import useStock from './hooks/useStock'
import Stock from './components/Stock'
import Header from './components/Header'
import GuessList from './components/GuessList'

export default function App() {
  
  const stockObj = useStock() //get stock info
  /*
  const [input, updateInput] = useState("")

  const handleInputChange = (newInput) => {
    updateInput(newInput)
  }  
  */
 
  return (
    <main>
      <Header />
      <div className="ticker">
        <Stock ticker={stockObj['Symbol']} />
        <GuessList stockObj={stockObj} />
      </div>
    </main>
  ) 
}