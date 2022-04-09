import React from 'react'
import Guess from './Guess'

export default function GuessList(props) {
  const gameDone = localStorage.getItem('done')
  const guesses = props.list

  

  
  

  
  
  
  let guessComps = Array(6).fill("")
  for (let i=0; i<guesses.length; i++) {
    guessComps[i] = guesses[i]
  }

  const guessList = guessComps.map((el, index) => <Guess key={index} name={el} />)

  return (
    <div>
    {guessList}
    </div>
  )
}