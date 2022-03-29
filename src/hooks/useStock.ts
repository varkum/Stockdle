import React from 'react'
import stocks from '../stocks'


export default function useStock() {
  
  let date = new Date()
  let myNum = new Math.seedrandom(date.getDate())
  localStorage.removeItem('done')
  localStorage.removeItem('guesses')
  let index = Math.floor(Math.random() * 500)
  return stocks[index]
}
