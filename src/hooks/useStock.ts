import React from 'react'
import stocks from '../stocks'


export default function useStock() {
  console.log(stocks.length)
  let date = new Date()
  let myNum = new Math.seedrandom(date.getDate())
  localStorage.removeItem('done')
  localStorage.removeItem('guesses')
  let index = Math.floor(Math.random() * 169)
  return stocks[index]
}
