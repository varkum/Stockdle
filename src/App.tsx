import React, { useState } from 'react'
import './App.css'
import useStock from './hooks/useStock'
import Stock from './components/Stock'
import Header from './components/Header'
import GuessList from './components/GuessList'

export default function App() {
  
  const stockObj = useStock()

  //    Header
    //  <Guesses />
   //   <Submit />
  return (
    <main>
      <Header />
      <div className="ticker">
        <Stock ticker={stockObj['Symbol']} />
        <GuessList />
      </div>
    </main>
  ) 
}