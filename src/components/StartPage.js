import {useState} from "react";
import ImagesComponent from "./constants.js"
import Game from "./GamePage.js"
import tech1 from "../img/tech1.jpg";
import tech2 from "../img/tech2.jpg";
const Start = () => {
    const [score, setScore] = useState(0);
    const [photoSource, setPhotoSource] = useState(tech1);
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
        console.log("wrong");
        let t = count + 1;
        setCount(t);
        if (t === 5) {
            //end game
        }
        //update photo info
        //way to get element from list?
    }
    const changeAnswer = (event) => {
        setAnswer(event.target.value);
    };

//pass info to game page to make render correct photo
  return (
  <div>
    <div>
        <Game count = {count} score = {score} photoSource = {photoSource} submit = {submit} changeAnswer = {changeAnswer} answer = {answer}/>
    </div>
  </div>
  );
};
export default Start;
