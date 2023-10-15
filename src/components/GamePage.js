import tech1 from "../img/tech1.jpg";
import tech2 from "../img/tech2.jpg";
const Game = ({count, score, photoSource, submit, changeAnswer, answer}) => {
  return (
    <div>
        <div>
            <img src = {photoSource}/>
        </div>
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Answer</label>
                    <input value = {answer} onChange ={changeAnswer}></input>
                </div>
                <div>
                    <button type="submit">Check</button>
                </div>
            </form>
        </div>
        <div>
            <p> Score is {score}</p>
        </div>
    </div>
  )
};
export default Game;
