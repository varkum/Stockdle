import React, { useState, useEffect } from 'react'
import Guess from './Guess'
import stocks from '../stocks'
import theme from "./theme"


//COMPONENT
export default function GuessList(props) {
  let guessComps = Array(6).fill("")

   for (let i=0; i<props.list.length; i++) {
    guessComps[i] = props.list[i]
  }

  const guessList = guessComps.map((el, index) => <Guess key={index} name={el} />)

  return (
    <div>
    {guessList}
      
    </div>
  )
}