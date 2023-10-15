import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import {IMAGES} from "./constants.js";
import MapElement from "./map.js";
import Mode from "./modal.js";
const Start = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [distance, setDistance] = useState(0);
    const image = IMAGES[count];
    const source = image.src;
    const submit = () => {
        const image = IMAGES[count];
        let t = count + 1;
        setCount(t);
    }

  return (
  <div>
    <div>
        <img src ={source}/>
    </div>
    <div>
        <MapElement submit = {submit} distance = {distance} setDistance = {setDistance} count = {count}/>
    </div>
  </div>
  );
};
export default Start;