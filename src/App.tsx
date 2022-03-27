import React, { useState, useEffect } from 'react'
import './App.css'
import useStock from './hooks/useStock'
import Stock from './components/Stock'
import Header from './components/Header'
import GuessList from './components/GuessList'
import GuessBox from './components/GuessBox'

const stockObj = useStock()

export default function App() {
  const [input, updateInput] = useState("")
  const [gameDone, updateDone] = useState(false)
  const [list, updateList] = useState([])

  const handleInputChange = (newInput) => {
    updateInput(newInput)
  }  

  const handleSubmit = (e) => {
    e.preventDefault()
    let guess = "❌ " + input
    if (input === stockObj['Description']) {
      updateDone(true)
      guess = input
    }
    updateList([...list, guess])
    updateInput("")
    
  }
  
  
 
  return (
    <main>
      <Header />
      <div className="ticker">
        <Stock ticker={stockObj['Symbol']} />
        <GuessList stockObj={stockObj} input={input} handleInput={handleInputChange} list={list} gameDone={gameDone} />
        <div className="guesser">
          <GuessBox input={input} handleInput={handleInputChange} done={gameDone} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </main>
  ) 
}