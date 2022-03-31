export default function useChecker(stockObj) {
  const checkInput = (guess) => {
    const guessChars = guess.toLowerCase().replace(/[\s&'!-,]/gi, '')
    const answer = stockObj['Security'].toLowerCase().replace(/[\s&'!-,]/gi, '')
    
    if (guessChars === answer) {
      
      return true
    }

    return false
  }

  return checkInput
}