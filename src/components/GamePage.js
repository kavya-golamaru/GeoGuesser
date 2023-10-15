import {IMAGES} from "./constants.js";
const Game = ({count, score, submit, changeAnswer, answer}) => {
    const image = IMAGES[count];
    const source = image.src;
  return (
    <div>
        <div>
            <img src = {source}/>
        </div>
        <div>
            <form onSubmit={submit}>
                <div className="answer">
                    <label>Answer: </label>
                    <input value = {answer} onChange ={changeAnswer}></input>
                </div>
                <div className="check">
                    <button type="submit">Check</button>
                </div>
            </form>
        </div>
        <div className="score">
            <p> Score: {score}</p>
        </div>
    </div>
  )
};
export default Game;