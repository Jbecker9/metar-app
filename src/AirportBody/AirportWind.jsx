import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportWind.css"

function AirportWind(){
    const { airportData } = useContext(MetarContext)

    function degreeToDirection(){
        const cardinalDirectionsObject = [ "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW" ]
        if (airportData){
            return cardinalDirectionsObject[Math.round( ( airportData.wind.degrees / (360 / cardinalDirectionsObject.length) )  % cardinalDirectionsObject.length )]
        } else {
        }
    }

    return(
        <div className="AirportWind-card">
            <h3 className="windText"> { airportData.wind.speed_kts } knots - { airportData.wind.degrees } Degrees {degreeToDirection()} { airportData.wind.gust_kts ?  `- Gust: ${ airportData.wind.gust_kts } knots` : null } </h3>
        </div>
)};

export default AirportWind