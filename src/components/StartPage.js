import {useState} from "react";
import {IMAGES} from "./constants.js"
import Game from "./GamePage.js"
const Start = () => {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [correct, setCorrect] = useState("tech tower");
    const [answer, setAnswer] = useState("");

    const submit = (event) => {
        event.preventDefault();
        if (answer === correct) {
            console.log("correct");
            let temp = score + 1
            setScore(temp);
        }
        setAnswer("");
        console.log("wrong");
        let t = count + 1;
        setCount(t);
        const image = IMAGES[t];
        const loc = image.location;
        setCorrect(loc);

    }
    const changeAnswer = (event) => {
        setAnswer(event.target.value);
    };

//pass info to game page to make render correct photo
  return (
  <div>
    <div>
        <Game count = {count} score = {score} submit = {submit} changeAnswer = {changeAnswer} answer = {answer}/>
    </div>
  </div>
  );
};
export default Start;
