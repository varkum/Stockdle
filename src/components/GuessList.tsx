import React, { useState, useEffect } from 'react'
import Guess from './Guess'
import stocks from '../stocks'
import Autosuggest from 'react-autosuggest'
import theme from "./theme"




const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = value.length
  
  return inputLength === 0 ? [] : stocks.filter(stock => 
    stock["Description"].toLowerCase().slice(0, inputLength) === inputValue
  )
}

const getSuggestionValue = suggestion => suggestion['Description']

const renderSuggestion = suggestion => {
  return (
    <div>
      {suggestion['Description']}
    </div>
  )
}

//COMPONENT
export default function GuessList(props) {
  const [input, changeInput] = useState('')
  const [suggestions, updateSuggestions] = useState([])
  const [list, updateList] = useState([])
  const [done, updateDone] = useState(false)
  
  let guessComps = Array(6).fill("")

  
 const handleChange = (e, { newValue }) => {
   changeInput(newValue)
 }

 const onSuggestionsFetchRequested = ( { value }) => {
   let newSuggestions = getSuggestions(value).slice(0,6)
   updateSuggestions(newSuggestions)
 }

  const onSuggestionsClearRequested = () => {
    updateSuggestions([])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let guess = "❌ " + input
    if (input === props.stockObj['Description']) {
      updateDone(true)
      guess = input
    }
    updateList([...list, guess])
    changeInput("")
    
  }

  const handleInput = (event) => {
    changeInput(event.target.value)
  }

   for (let i=0; i<list.length; i++) {
    guessComps[i] = list[i]
  }

  const guessList = guessComps.map((el, index) => <Guess key={index} name={el} />)


  const value = input
  const inputProps = {
    placeholder: "Know the S&P 500 Company?",
    value,
    onChange: handleChange
  }

  const prompt = done ? <h1 style={{margin: "10px" }}>Well done!</h1> : 
    <div className="guesser">
      <Autosuggest
        suggestions={suggestions}
         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme = {theme}
        />
      <button onClick={handleSubmit}>Submit</button>
      </div>
    
 
  return (
    <div>
    {guessList}
      {prompt}
 
    </div>
  )
}