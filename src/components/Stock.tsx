import React, { useState, useEffect } from 'react'

export default function Stock(props) {
  const hintsCache = localStorage.getItem('hints') ? JSON.parse(localStorage.getItem('hints')) : []

  
  const [hints, updateHints] = useState(hintsCache)

  useEffect(() => {
    if (props.gameDone == 'won' || props.gameDone == 'lost') {
    updateHints([`Headquarters: ${props.stock["Headquarters Location"]}`, `Founded: ${props.stock["Founded"]}`, `Sector: ${props.stock["GICS Sector"]}`, `Sub-Sector: ${props.stock["GICS Sub-Industry"]}`, `Number of letters: ${props.stock["Security"].length}`]) }
  }, [props.gameDone])

  useEffect(() => {
    localStorage.setItem('hints', JSON.stringify(hints))
  }, [hints])
  
  useEffect(() => {
    if (props.gameDone !== 'won') {
    switch(props.count) {
      case 1:
        updateHints([...hints, `Headquarters: ${props.stock["Headquarters Location"]}`])
        
        break
      case 2:
        updateHints([...hints, `Founded: ${props.stock["Founded"]}`])
        
        break
      case 3:
        updateHints([...hints, `Sector: ${props.stock["GICS Sector"]}`])
        
        break
      case 4:
        updateHints([...hints, `Sub-Sector: ${props.stock["GICS Sub-Industry"]}`])
        break
      case 5:
        updateHints([...hints, `Number of letters: ${props.stock["Security"].length}`])
        break
    }
    }
  }, [props.count])

  let hintsComp = []
  for (let i=0; i<hints.length; i++) {
    hintsComp[i] = <h3 key={i}>{hints[i]}</h3>
  }
  return (
    <div>
      <h1>${props.stock['Symbol']}</h1>
      {hintsComp}
    </div>
  )
}