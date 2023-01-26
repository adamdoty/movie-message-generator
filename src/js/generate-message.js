const data = require('../data/MOCK_DATA (1).json')

const getRandomDataEntry = () => {
  return data[Math.floor(Math.random() * data.length)]
}

const formatQuote = (quote) => {
  return quote.charAt(0).toUpperCase() + quote.slice(1) + '.'
}

const composeMessage = (messageData) => {
  // format quote
  const message = `
    Movie Quote of the Day: "${formatQuote(messageData.movie_quote)}" 
    - ${messageData.quotee}\n
    Movie Genre of the Day: "${messageData.movie_genre}"\n
    Movie Title of the Day: "${messageData.movie_title}"`
  return message
}

console.log(composeMessage(getRandomDataEntry()))
