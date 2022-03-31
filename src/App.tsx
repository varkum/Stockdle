import React, { useState, useEffect } from 'react'
import './App.css'
import useStock from './hooks/useStock'
import Stock from './components/Stock'
import Header from './components/Header'
import GuessList from './components/GuessList'
import useChecker from './hooks/useChecker'
import InputBox from './components/InputBox'
import useStats from './hooks/useStats'

const date = new Date()
const dateID = new Math.seedrandom(date.getDate())
const stockObj = useStock(dateID())

export default function App() {
  
  
   //localStorage.clear()
    

  //get old game data
  const done = localStorage.getItem('done')
  
  const [input, updateInput] = useState("")
  const [list, updateList] = useState([])
  const [guessCount, updateCount] = useState(0)
  const [gameDone, updateDone] = useState(done)

  const checkInput = useChecker(stockObj)
  const updateStats = useStats()
  
   
  
  
  //update localstorage list of guesses
  useEffect(() => {
    if (list.length != 0) {
      localStorage.setItem('guesses', JSON.stringify(list))
    }
    
  }, [list])

  useEffect(() => {
     if (guessCount === 6) {
      updateDone('lost')
       updateStats({
        numGuesses: guessCount,
        game: 'lost'
      })
    }

    

    

     
  }, [guessCount])
  
  //update localstorage if game is won
  useEffect(() => {
    if (gameDone === 'won') {
      localStorage.setItem('done', 'won')
    } else if (gameDone === 'lost') {
      localStorage.setItem('done', 'lost')
    }
    
  }, [gameDone])
  
  const handleInputChange = (newInput) => {
    updateInput(newInput)
  }  

  const handleSubmit = (e) => {
    e.preventDefault()
    let guess = "❌ " + input
    if (checkInput(input)) {
      guess = "✅ " + input
      updateDone('won')
      updateStats({
        numGuesses: guessCount + 1,
        game: 'won'
      })
     }
    updateCount(guessCount + 1)
      
    
    //remember that game ended if all guesses used
   
    updateList([...list, guess])
    updateInput("")
  }

  const copy = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const dateStr = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    const results = JSON.parse(localStorage.getItem('stats'))  
    console.log(results)
    let resultStr = ""
    resultStr += `🔥Streak: ${results.length} \n`
    
    for (let i=0; i<results.length; i++) {
      resultStr += `🟥`.repeat(results[i].guesses - 1)
      if (results[i].guesses !== 6) {
        resultStr += `🟩`
        resultStr += `⬜`.repeat( 6 - results[i].guesses)
      }
      resultStr += `
`
      
    }
    let shareString = `
📈 #Stockdle 📈
💸 ${dateStr}  
${resultStr}
`

    navigator.clipboard.writeText(shareString)
    const main = document.querySelector("main")
    const copyMsg = document.createElement('p') 
    copyMsg.setAttribute('id', 'copyMsg')
    copyMsg.textContent = "Copied!"
    main.appendChild(copyMsg)

    setTimeout(() => {
      document.getElementById("copyMsg").remove()
      
    }, 1600)
  }
  
  const share = <a onClick={copy}>Share!</a>
  //Make input box or message
  const prompt = gameDone == 'won' ? 
    <div>
      <h1 style={{margin: "10px"}}>WELL DONE!</h1> 
      {share}
      </div> : gameDone == 'lost' ? 
    <div>
      <h1>{stockObj['Security']}</h1> 
      {share}
      </div> :
      <div>
        <form type="submit" onSubmit={handleSubmit} >
          <InputBox input={input} handleInput={handleInputChange} />
          <button className="submit" type="submit">💰 Submit 💰</button>
          </form>
        </div>
  
  return (
    <main>
      <Header />
      <div className="container">
      <div className="ticker">
        <Stock stock={stockObj} count={guessCount} />
        <GuessList list={list} />
      </div>
      {prompt}
        </div>
    </main>
    
  ) 
}