import React from "react";
import './styles.css';
const classNames = "large-text block-text";
const centerTextStyles = {
  display: 'flex',
  justifyContent: 'center', // Horizontally center
  alignItems: 'center',     // Vertically center
  height: '100vh',         // Adjust the height as needed
};
const Welcome = () => {
    //write functions to make variables that will be passed into game component '
   const photo = () => {
    //set photo
   }
  return (
    <div style={centerTextStyles}>
      <p className={classNames}>GeoGuesser</p>
      <div>
        <a href="/Start">
          <button className="button-container">Click to Play!</button>
        </a>
      </div>
    </div>
  );
};
export default Welcome;
