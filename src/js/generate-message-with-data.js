const data = [{ id: 1, movie_quote: 'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit', quotee: 'Marris Auchterlony', movie_genre: 'Drama|Film-Noir', movie_title: 'Mildred Pierce' },
  { id: 2, movie_quote: 'mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at', quotee: 'Brew Wrought', movie_genre: 'Crime|Drama', movie_title: 'Jericho Mile, The' },
  { id: 3, movie_quote: 'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien', quotee: 'Poppy Dayer', movie_genre: 'Action|Comedy|Drama', movie_title: 'Amar Akbar Anthony' },
  { id: 4, movie_quote: 'tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet', quotee: 'Ewell McMychem', movie_genre: 'Horror|Mystery|Sci-Fi', movie_title: 'Decoder' },
  { id: 5, movie_quote: 'pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat', quotee: 'Timmie Stubbley', movie_genre: 'Comedy|Drama', movie_title: 'Grand Budapest Hotel, The' },
  { id: 6, movie_quote: 'augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat', quotee: 'Jeni Baudon', movie_genre: 'Crime|Drama|Thriller', movie_title: 'Interrogation (Przesluchanie)' },
  { id: 7, movie_quote: 'sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus', quotee: 'Kristoffer Offin', movie_genre: 'Documentary', movie_title: 'TPB AFK: The Pirate Bay Away from Keyboard' },
  { id: 8, movie_quote: 'risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci', quotee: 'Fran Cromar', movie_genre: 'Children|Drama', movie_title: 'I Wish (Kiseki)' },
  { id: 9, movie_quote: 'sed sagittis nam congue risus semper porta volutpat quam pede lobortis', quotee: 'Francesca Kilfedder', movie_genre: 'Drama', movie_title: 'Dutchman' },
  { id: 10, movie_quote: 'ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero', quotee: 'Pincus Jan', movie_genre: 'Documentary', movie_title: 'Z Channel: A Magnificent Obsession' }
]

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
