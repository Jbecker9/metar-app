import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportClouds.css"
import AirportCloudsUnitCheck from "./AirportCloudsCard";

function AirportClouds(){
    const { airportData } = useContext(MetarContext)
    const [unit, setUnit] = useState(true)

    function renderUnitChange(event){
        setUnit(!unit)
        changeUnitButtonStyling(event.target.id)
    }

    function changeUnitButtonStyling(unitOfMeasurement){
        const feetElement = document.getElementById("feet")
        const metersElement = document.getElementById("meters")
        if(unitOfMeasurement === "feet"){
            feetElement.style.backgroundColor = "#e7e7e7"
            metersElement.style.backgroundColor = "var(--border-color)"
        } else {
            metersElement.style.backgroundColor = "#e7e7e7"
            feetElement.style.backgroundColor = "var(--border-color)"
        }
    }

    return(
        <div className="AirportClouds-container">
            <h2 className="AirportClouds-title">Clouds</h2>
            <button className="AirportClouds-button" id="feet" onClick={renderUnitChange}> Feet </button>
            <button className="AirportClouds-button"  id="meters" onClick={renderUnitChange}> Meters </button>
            { airportData.clouds.map((cloudLevel, index) => <AirportCloudsUnitCheck unit={unit} cloudLevel={cloudLevel} key={index} />) }
        </div>
)};

export default AirportClouds