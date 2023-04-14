import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportTitle.css"
import AirportLocation from "./AirportLocation";
import AirportBarometer from "./AirportBarometer";

function AirportTitle(){ 
    const { airportData } = useContext(MetarContext)
    
    return(
        <div className="AirportTitle-card">
            <h2 className="AirportTitle-title">{airportData.station.name} ({airportData.icao})</h2>
            <AirportLocation />
            <AirportBarometer />
        </div>
)};

export default AirportTitle