import {useState} from "react";
import {IMAGES} from "./constants.js"
import Game from "./GamePage.js"
const Start = () => {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState("");

    const submit = (event) => {
        event.preventDefault();
        const image = IMAGES[count];
        const loc = image.location;
        if (answer === loc) {
            console.log("correct");
            let temp = score + 1
            setScore(temp);
        }
        setAnswer("");
        console.log("wrong");
        let t = count + 1;
        setCount(t);
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
