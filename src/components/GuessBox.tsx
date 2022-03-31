import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import stocks from '../stocks'
//import theme from "./theme"

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = value.length
  
  return inputLength === 0 ? [] : stocks.filter(stock => 
    stock["Security"].toLowerCase().slice(0, inputLength) === inputValue
  )
}

const getSuggestionValue = suggestion => suggestion['Security']

const renderSuggestion = suggestion => {
  return (
    <div>
      {suggestion['Security']}
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
    placeholder: "Know the Company?",
    value,
    onChange: handleChange
  }

  return (
    <div>
            <Autosuggest
        suggestions={suggestions}
         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        
        />
    </div>
  )
}