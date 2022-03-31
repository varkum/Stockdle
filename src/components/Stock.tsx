import React, { useState, useEffect } from 'react'

export default function Stock(props) {
  const [hints, updateHints] = useState([])

  useEffect(() => {
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