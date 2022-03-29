import React from 'react'
import Guess from './Guess'

export default function GuessList(props) {
  const gameDone = localStorage.getItem('done')
  let guesses = props.list
  
      if (gameDone === 'won' || gameDone == 'lost') {
    guesses = JSON.parse(localStorage.getItem('guesses'))
  } 
  
  let guessComps = Array(6).fill("")
  console.log(guesses)
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