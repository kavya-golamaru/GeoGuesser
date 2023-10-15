import React from "react";
import './styles.css';
const classNames = "large-text block-text";
const centerTextStyles = {
  display: 'flex',
  position: 'relative', // Change this to 'absolute' or 'fixed' if needed
  top: '100px',          // Adjust as needed
  left: '575px',     // Vertically center
  height: '100vh',         // Adjust the height as needed
};
const Welcome = () => {
    //write functions to make variables that will be passed into game component '
   const photo = () => {
    //set photo
   }
  return (
    <div className="image-background">
      <div style={centerTextStyles}>
        <p className={classNames}>GeoGuesser</p>
        <div>
          <a href="/play">
            <button className="button-container">Click to Play!</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Welcome;