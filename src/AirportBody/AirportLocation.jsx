import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import AirportTemp from "./AirportTemp";
import "../styles/AirportLocation.css"

function AirportLocation(){ 
    const { airportData } = useContext(MetarContext)
    
    return( 
         <div className="AirportLocation-container">
            <h3>{airportData.station.location} </h3>
            <AirportTemp />
        </div>
)};

export default AirportLocation