import React, { useState, useEffect } from 'react'
import Guess from './Guess'

export default function GuessList(props) {
  const [input, changeInput] = useState('')
  const [list, updateList] = useState([])
  
  let guessComps = Array(6).fill("")
 
 

  const handleSubmit = (e) => {
    e.preventDefault()
    updateList([...list, input])
    changeInput("")
    
  }

  const handleInput = (event) => {
    changeInput(event.target.value)
  }

   for (let i=0; i<list.length; i++) {
    guessComps[i] = list[i]
  }

  const guessList = guessComps.map((el, index) => <Guess id={index} name={el} />)
  
  return (
    <div>
    {guessList}
      <input type="text" value={input} onChange={handleInput} placeholder="Know the S&P 500 Company?"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}