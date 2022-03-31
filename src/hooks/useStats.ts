export default function useStats() {

  const updateStats = ({ numGuesses, game }) => {
    let stats = JSON.parse(localStorage.getItem('stats'))
    const dateObj = new Date()
    const date = dateObj.getDate()
    
    
    if (!stats) {
      
    
      const result = [{
        date: date,
        guesses: numGuesses,
        game: game
      }]
      
      console.log(result)
      localStorage.setItem('stats', JSON.stringify(result))
    }
     else if (stats[stats.length - 1].date == date - 1) {
      stats.push({
        date: date,
        guesses: numGuesses,
        game: game
      })
      console.log(stats)
      if (streak === 6) {
        stats.shift()
      }
      console.log(stats)
      localStorage.setItems('stats', JSON.stringify(stats))
    }
  }

  return updateStats
}