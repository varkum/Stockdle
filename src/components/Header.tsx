import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import Footer from './Footer'


export default function Header(props) {
  const [howTo, updateHowTo] = useState(false)
  const [showStats, updateShowStats] = useState(false)
  const [stats, updateStats] = useState({
    played: 0,
    won: 0,
    lost: 0,
    winPercent: ''
  })
  
  useEffect(() => {
    if (localStorage.getItem('total')) {
    const statsObj = JSON.parse(localStorage.getItem('total'))
    stats.played = statsObj.played
    stats.won = statsObj.won
    stats.lost = statsObj.lost
    stats.winPercent = ((statsObj.won/statsObj.played) * 100).toFixed(2)
    }
  }, [props.gameDone])
  
  const handleHowTo = () => {
    updateHowTo(!howTo)
  }

  const handleShowStats = () => {
    updateShowStats(!showStats)
  }

  const howToPlay = <div><p>
    Guess the company name based on the stock ticker! Every wrong guess reveals a new hint to help you. Don't worry about formal full names (like Apple Corporation) but be sure to check your spelling.</p>
    <p>
New Stockdle released every day at midnight. Be sure to check out your stats and share!
</p> </div>

  const statsContainer = <div className="stats">
    <p>Won: {stats.won}</p>
    <p>Lost: {stats.lost}</p>
    <p>Played: {stats.played}</p>
    <p>Win Percentage: {stats.winPercent}%</p>
  </div>
  
  return (
    <div className="header">
      <div className="header-content">

      <button className="header-btn " onClick={handleHowTo}><i className="fa-solid fa-circle-question"></i></button>  
      
      <Modal show={howTo} handleClose={handleHowTo} header="How to Play" content={howToPlay}/>
        <h1>Stockdle📈</h1>
      
      
      <button className="header-btn" onClick={handleShowStats}><i className="fa-solid fa-chart-column"></i></button>

        <Modal show={showStats} handleClose={handleShowStats} header="Stats" content={statsContainer} />
      </div>
    </div>
  )
}