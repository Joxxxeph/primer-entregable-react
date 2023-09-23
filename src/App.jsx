import { useState } from 'react'
import { getElementRandom } from "./utils/randomElement"
import quotes from "./db/quotes.json"

import './App.css'
import CardQuote from "./components/CardQuote"

const imge = ["img1", "img2","img3","img4","img5","img6","img7",
            "img8","img9","img10","img11","img12","img13","img14","img15"]

function App() {
    
  const [quote, setQuote] = useState(getElementRandom(quotes))
  const [fontImage, setFontImage] = useState(getElementRandom(imge))

  const handleQuote = ()=> {
    setQuote(getElementRandom(quotes));
    setFontImage(getElementRandom(imge));
}

  return (
    <main className={`app ${fontImage}`}>
      <CardQuote quote={quote} handleQuote={handleQuote} />
    </main>
  )
}

export default App
