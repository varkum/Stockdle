import React from 'react'

export default function InputBox(props) {

  const handleChange = event => {
    props.handleInput(event.target.value)
  }

  return (
    <input type="text" value={props.input} onChange={handleChange} placeholder="Know the company?"></input>
  )
}