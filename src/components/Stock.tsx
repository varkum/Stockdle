import React, { useState, useEffect, useRef } from 'react'

export default function Stock(props) {
  return (
    <div>
      <h1>${props.ticker}</h1>
    </div>
  )
}