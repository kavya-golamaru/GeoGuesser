import {useMemo} from "react";
import "../globals.css";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
export default function MapElement() {
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDDL4QPQKGbitbTDArh2lu7lg-2JFmoAsk",
    });
    if(!isLoaded) return <div>Load</div>
    return <Map />
    function Map() {
        return (<GoogleMap onClick = {(e) => handleClick(e)} zoom={18} center={{lat:33.7742804, lng:-84.3958565}} mapContainerClassName="map-container"></GoogleMap>);
    }
    function handleClick(event) {
        var lat = event.latLng.lat();
        var lon = event.latLng.lng();
    }
}