import React, { useState } from "react";
import AirportBarometerSwitch from "./AirportBarometerSwitch";
import "../styles/AirportBarometer.css"

function AirportBarometer(){
    const [baroMeasurement, setBaroMeasurement] = useState("inHg")
    const measurements = ["inHg", "hPa", "kPa", "mb"]

    function renderBaroMeasurement(event){
        setBaroMeasurement(event.target.id)
        document.getElementById(event.target.id).style.backgroundColor = "#e7e7e7"
        measurements.forEach((reading) => {
            if (reading !== event.target.id){
                document.getElementById(reading).style.backgroundColor = "var(--border-color)"
            } else {
            }
        })
    }

    return(
        <div className="AirportBarometer-container">
            <AirportBarometerSwitch baroMeasurement={baroMeasurement} />
            <div className="AirportBarometer-buttonContainer">
                <button className="AirportBarometer-button" id="inHg" onClick={renderBaroMeasurement}>inHg</button>
                <button className="AirportBarometer-button" id="hPa" onClick={renderBaroMeasurement}>hPa</button>
                <button className="AirportBarometer-button" id="kPa" onClick={renderBaroMeasurement}>kPa</button>
                <button className="AirportBarometer-button" id="mb" onClick={renderBaroMeasurement}>mb</button>
            </div>
        </div>
)};

export default AirportBarometer