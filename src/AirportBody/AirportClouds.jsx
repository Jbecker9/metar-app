import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportClouds.css"
import AirportCloudsCard from "./AirportCloudsCard";

function AirportClouds(){
    const { airportData } = useContext(MetarContext)
    const [unit, setUnit] = useState(true)

    return(
        <div className="AirportClouds-container">
            <h2 className="AirportClouds-title">Clouds</h2>
            <button value="Feet" onClick={()=>setUnit(true)}> Feet </button>
            <button value="Meters" onClick={()=>setUnit(false)}> Meters </button>
            { airportData.clouds.map((cloudLevel, index) => <AirportCloudsCard unit={unit} cloudLevel={cloudLevel} key={index} />) }
        </div>
)};

export default AirportClouds