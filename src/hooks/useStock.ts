import stocks from '../stocks'

export default function useStock(dateID) {
  //console.log(stocks.length)

  if (!localStorage.getItem('recentDay')) {
    localStorage.setItem('recentDay', dateID.toString())
  } else if (dateID.toString() !== localStorage.getItem('recentDay')) {
    localStorage.removeItem('done')
    localStorage.removeItem('guesses')
    localStorage.setItem('recentDay', dateID.toString())
  }

 
  
  
  let index = Math.floor(dateID * 135)
  return stocks[index]
}
