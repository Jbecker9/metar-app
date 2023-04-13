import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import CompassRose from "./CompassRose";

function AirportWind(){
    const { airportData } = useContext(MetarContext)

    return(
        <div className="AirportWind-container">
            <div className="windContainer">
                <h3> { airportData.wind.speed_kts }kts </h3>
                <h3> Gust { airportData.wind.gust_kts }kts </h3>
            </div>
            <CompassRose />
        </div>
)};

export default AirportWind