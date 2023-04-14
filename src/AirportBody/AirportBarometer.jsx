import React, { useState } from "react";
import AirportBarometerSwitch from "./AirportBarometerSwitch";
import "../styles/AirportBarometer.css"

function AirportBarometer(){
    const [baroMeasurement, setBaroMeasurement] = useState("inHg")

    return(
        <div className="AirportBarometer-container">
            <AirportBarometerSwitch baroMeasurement={baroMeasurement} />
            <div className="AirportBarometer-buttonContainer">
                <button className="AirportBarometer-button" id="inHg" onClick={(event) => setBaroMeasurement(event.target.id)}>inHg</button>
                <button className="AirportBarometer-button" id="hPa" onClick={(event) => setBaroMeasurement(event.target.id)}>hPa</button>
                <button className="AirportBarometer-button" id="kPa" onClick={(event) => setBaroMeasurement(event.target.id)}>kPa</button>
                <button className="AirportBarometer-button" id="mb" onClick={(event) => setBaroMeasurement(event.target.id)}>mb</button>
            </div>
        </div>
)};

export default AirportBarometer