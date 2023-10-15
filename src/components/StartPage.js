import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import {IMAGES} from "./constants.js";
import MapElement from "./map.js";
const mapStyles = {
  position: 'relative',  // Adjust to 'absolute' or 'fixed' as needed
  top: '50px',          // Adjust the top position
  left: '350px',         // Adjust the left position
  width: '1600px',       // Adjust the width
  height: '450px',      // Adjust the height
};
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
        <img src ={source} className="geo-image"/>
    </div>
    <div style={mapStyles}>
        <MapElement submit = {submit} distance = {distance} setDistance = {setDistance} count = {count}/>
    </div>
  </div>
  );
};
export default Start;