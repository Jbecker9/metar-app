import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportClouds.css"
import AirportCloudsCard from "./AirportCloudsCard";

function AirportClouds(){
    const { airportData } = useContext(MetarContext)

    return(
        <div className="AirportClouds-container">
            <h2 className="AirportClouds-title">Clouds</h2>
            <button> Feet </button>
            <button> Meters </button>
            { airportData.clouds.map((cloudLevel, index) => <AirportCloudsCard cloudLevel={cloudLevel} key={index} />) }
        </div>
)};

export default AirportClouds