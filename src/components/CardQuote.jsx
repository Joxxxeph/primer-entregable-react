import { BiReset } from "react-icons/bi";
import "./CardQuote.css"

const CardQuote = ({quote, handleQuote}) => {
    

    return (
    <div className="cardQuote">
        <h2 className="title">Frases Célebres</h2>
        <img src="/pergamino.png" className="pergamino" alt=""/>
        <article className="cardQuote__info">
            <div className="phrase">
                <p className="cardQuote__info--phrase">{quote.phrase}</p>
            </div>
        <p className="cardQuote__info--footer">Pd: {quote.author}</p>
        </article>
            <button className="cardQuote__info--btn" onClick={handleQuote}>
                <BiReset className="bx"/>
            </button>
        <p className="by">By Joseph Vásquez</p>
    </div>
  )
}
export default CardQuote