export default function useStats() {

  const updateStats = ({ numGuesses, game }) => {
    let stats = JSON.parse(localStorage.getItem('stats'))
    let total = JSON.parse(localStorage.getItem('total'))
    const dateObj = new Date()
    const date = dateObj.getDate()
    let win = 0
    let lost = 0
    let data = {}
    
    if (game === 'won') {
      win = 1
    } else if (game === 'lost') {
      lost = 1
    }
    //update total stats
    if (!total) {
       data = {
        played: 1,
        won: win,
        lost: lost
      }

      
    } else {
       data = {
        played: total.played + 1,
        won: total.won + win,
        lost: total.lost + lost
      }
    }
    localStorage.setItem('total', JSON.stringify(data))

    console.log(JSON.parse(localStorage.getItem('total')))
    //update game stats
    if (!stats) {
      
      const result = [{
        date: date,
        guesses: numGuesses,
        game: game
      }]
      
      
      localStorage.setItem('stats', JSON.stringify(result))
    }
     else if (stats[stats.length - 1].date == date - 1) {
      stats.push({
        date: date,
        guesses: numGuesses,
        game: game
      })
      
      if (streak === 6) {
        stats.shift()
      }
      
      localStorage.setItem('stats', JSON.stringify(stats))
    } else {
       const result = [{
        date: date,
        guesses: numGuesses,
        game: game
      }]

       localStorage.setItem('stats', JSON.stringify(result))
    }
  }

  return updateStats
}