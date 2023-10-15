import './styles.css';
import Modal from './Modal';
import React, { useState } from 'react';
const classNames = "large-text block-text";
const centerTextStyles = {
  display: 'flex',
  position: 'relative', // Change this to 'absolute' or 'fixed' if needed
  top: '100px',          // Adjust as needed
  left: '575px',     // Vertically center
  height: '100vh',         // Adjust the height as needed
};

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="image-background">
      <div style={centerTextStyles}>
        <p className={classNames}>GeoTech-er</p>
        <div>
        <button onClick={openModal} className="button-container2">Instructions</button>
        <a href="/play">
            <button className="button-container">Click to Play!</button>
          </a>
        </div>
        <div>
          
          <div>
            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2>Instructions</h2>
              <p>For every image, try to guess its location on the map by clicking on the exact map location. At the end, the score displayes is the total number of meters you were off by in your guesses.</p>
              <button onClick={closeModal}>Close</button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;