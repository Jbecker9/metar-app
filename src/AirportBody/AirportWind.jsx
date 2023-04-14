import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportWind.css"

function AirportWind(){
    const { airportData } = useContext(MetarContext)

    return(
        <div className="AirportWind-card">
            <h3 className="windText"> { airportData.wind.speed_kts } knots - { airportData.wind.degrees } Degrees - { airportData.wind.gust_kts ?  `Gust: ${ airportData.wind.gust_kts } knots` : null } </h3>
        </div>
)};

export default AirportWind