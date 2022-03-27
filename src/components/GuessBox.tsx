import React, { useState, useEffect } from 'react'
import Autosuggest from 'react-autosuggest'
import stocks from '../stocks'
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

export default function GuessBox(props) {
  const [suggestions, updateSuggestions] = useState([])

   const handleChange = (e, { newValue }) => {
   props.handleInput(newValue)
 }

 const onSuggestionsFetchRequested = ( { value }) => {
   let newSuggestions = getSuggestions(value).slice(0,6)
   updateSuggestions(newSuggestions)
 }

  const onSuggestionsClearRequested = () => {
    updateSuggestions([])
  }

    const value = props.input
  const inputProps = {
    placeholder: "Know the S&P 500 Company?",
    value,
    onChange: handleChange
  }

    const prompt = props.done ? <h1 style={{margin: "10px" }}>Well done!</h1> : 
      <Autosuggest
        suggestions={suggestions}
         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme = {theme}
        />
      
  return (
    <div>
    {prompt}
    </div>
  )
}