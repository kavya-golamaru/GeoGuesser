import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import {IMAGES} from "./constants.js";
import Game from "./GamePage.js";
import MapElement from "./map.js";
const Start = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState("");
    const [checked, setChecked] = useState(0);
    const [right, setRight] = useState(0);

    const submit = (event) => {
       let temp = score;
        event.preventDefault();
        const image = IMAGES[count];
        const loc = image.location;
        if (answer === loc) {
            temp = temp + 1
            setScore(temp);
            setRight(1);
        }
        setAnswer("");
        console.log("wrong");
        let t = count + 1;
        setCount(t);
        if (t === IMAGES.length) {
            navigate("/end", {state:{score: temp}});
        }
        setChecked(1);
    }
    const changeAnswer = (event) => {
        setAnswer(event.target.value);
    };

  return (
  <div>
    <div>
        <Game count = {count} score = {score} submit = {submit} changeAnswer = {changeAnswer} answer = {answer}/>
    </div>
    <div>
        <MapElement />
    </div>
    <div>

    </div>
  </div>
  );
};
export default Start;
