import React, {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import Modal from 'react-modal';
import "./styles.css";
import {IMAGES} from "./constants.js";
import {GoogleMap, useLoadScript, DistanceMatrixService} from "@react-google-maps/api";
export default function MapElement({submit, distance, setDistance, count}) {
    const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
    };
    const navigate = useNavigate();
    let d = 0;
    const [isOpen, setIsOpen] = React.useState(false);
    let subtitle;

      function openModal() {
        setIsOpen(true);
      }

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

      function closeModal() {
        setIsOpen(false);
      }

    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDDL4QPQKGbitbTDArh2lu7lg-2JFmoAsk",
    });
    if(!isLoaded) return <div>Load</div>
    return (
    <div>
    <Map />
    <div>
          <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Distance Off"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Distance Off</h2>
            <div><p>You were {distance} meters off on this guess</p></div>
            <button onClick={closeModal}>close</button>
          </Modal>
        </div>
    </div>
    );
    function Map() {
        return (<GoogleMap onClick = {(e) => handleClick(e)} zoom={18} center={{lat:33.7742804, lng:-84.3958565}} mapContainerClassName="map-container"></GoogleMap>);
    }
    function handleClick(event) {
        const toRadian = n => (n * Math.PI) / 180
        var lat1 = event.latLng.lat();
        var lon1 = event.latLng.lng();
        const image =  IMAGES[count];
        console.log(IMAGES);
        console.log(count);
        console.log(image);
        const lat2 = image.lat;
        const lon2 = image.lon;
        console.log("lat2", lat2);
        console.log("lon2", lon2);
        let temp = distance;
            let R = 6371000  // m
            let x1 = lat2 - lat1
            console.log("x1", x1);
            let dLat = toRadian(x1)
            let x2 = lon2 - lon1
            console.log("x2", x2);
            let dLon = toRadian(x2)
            let a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            d = R * c
            console.log("distance==?",d)
            setIsOpen(true);

        temp = temp + d;
        let t = count + 1;
        if (t === 8) {
            //end after 8 images shown
            navigate("/end", {state:{d: temp}});
        }
        {setDistance(temp)}
        {submit()}
    }
}