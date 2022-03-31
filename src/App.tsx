import React, { useState, useEffect } from 'react'
import './App.css'
import useStock from './hooks/useStock'
import Stock from './components/Stock'
import Header from './components/Header'
import GuessList from './components/GuessList'
import useChecker from './hooks/useChecker'
import InputBox from './components/InputBox'

const stockObj = useStock()

export default function App() {
  //get old game data
  
  const done = localStorage.getItem('done')
  
  const [input, updateInput] = useState("")
  const [list, updateList] = useState([])
  const [guessCount, updateCount] = useState(0)
  const [gameDone, updateDone] = useState(done)

  const checkInput = useChecker(stockObj)
  
  //update localstorage list of guesses
  useEffect(() => {
    if (list.length != 0) {
      localStorage.setItem('guesses', JSON.stringify(list))
    }
    
  }, [list])

  useEffect(() => {
     if (guessCount === 6) {
      updateDone('lost')
    }
  }, [guessCount])
  
  //update localstorage if game is won
  useEffect(() => {
    if (gameDone === 'won') {
      localStorage.setItem('done', 'won')
    } else if (gameDone === 'lost') {
      localStorage.setItem('done', 'lost')
    }
    
  }, [gameDone])
  
  const handleInputChange = (newInput) => {
    updateInput(newInput)
  }  

  const handleSubmit = (e) => {
    e.preventDefault()
    let guess = "❌ " + input
    if (checkInput(input)) {
      guess = "✅ " + input
      updateDone('won')
      
    } else {
      updateCount(guessCount + 1)
      
    }
    //remember that game ended if all guesses used
   
    updateList([...list, guess])
    updateInput("")
  }
  
  
  
  //Make input box or message
  const prompt = gameDone == 'won' ? <h1 style={{margin: "10px"}}>WELL DONE!</h1> : gameDone == 'lost' ? <h1>{stockObj['Security']}</h1> :
      <div>
        <form type="submit" onSubmit={handleSubmit} >
          <InputBox input={input} handleInput={handleInputChange} />
          <button type="submit">💰 Submit 💰</button>
          </form>
        </div>
  
  return (
    <main>
      <Header />
      <div className="container">
      <div className="ticker">
        <Stock stock={stockObj} count={guessCount} />
        <GuessList list={list} />
      </div>
      {prompt}
        </div>
    </main>
  ) 
}