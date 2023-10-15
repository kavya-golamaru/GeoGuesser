import {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../globals.css";
import {IMAGES} from "./constants.js";
import {GoogleMap, useLoadScript, DistanceMatrixService} from "@react-google-maps/api";
export default function MapElement({submit, distance, setDistance, count}) {
    const navigate = useNavigate();
    const [route, setRoute] = useState([]);
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDDL4QPQKGbitbTDArh2lu7lg-2JFmoAsk",
    });
    if(!isLoaded) return <div>Load</div>
    return (<Map />);
    function Map() {
        return (<GoogleMap onClick = {(e) => handleClick(e)} zoom={18} center={{lat:33.7742804, lng:-84.3958565}} mapContainerClassName="map-container"></GoogleMap>);
    }
    function handleClick(event) {
        const toRadian = n => (n * Math.PI) / 180
        var lat1 = event.latLng.lat();
        var lon1 = event.latLng.lng();
        const image =  IMAGES[count];
        const lat2 = image.lat;
        const lon2 = image.lon;
        console.log("lat2", lat2);
        console.log("lon2", lon2);
        let temp = distance;
        console.log(lat1, lon1+"==="+lat2, lon2)
            let R = 6371  // km
            let x1 = lat2 - lat1
            let dLat = toRadian(x1)
            let x2 = lon2 - lon1
            let dLon = toRadian(x2)
            let a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            let d = R * c
            console.log("distance==?",d)
        temp = temp + d;
        let t = count + 1;
        if (t === IMAGES.length) {
            navigate("/end", {state:{d: temp}});
        }
        {setDistance(temp)}
        {submit()}
    }
}