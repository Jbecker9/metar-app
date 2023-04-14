import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportTitle.css"
import AirportLocation from "./AirportLocation";

function AirportTitle(){ 
    const { airportData } = useContext(MetarContext)
    
    return(
        <div className="AirportTitle-card">
            <h2 className="AirportTitle-title">{airportData.station.name} ({airportData.icao})</h2>
            <AirportLocation />
        </div>
)};

export default AirportTitle