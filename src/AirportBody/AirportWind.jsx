import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportWind.css"
import Compass from "cardinal-direction"

function AirportWind(){
    const { airportData } = useContext(MetarContext)
    degreeToCardinalDirection()

    function degreeToCardinalDirection(){
        const cardinalDegreeDifference = (21) + (3 / 17)
        const denominator = 17
        const degreeMathSort = ( airportData.wind.degrees / cardinalDegreeDifference )
        const remainderDegree = degreeMathSort % denominator
        console.log(remainderDegree)
    }

    return(
        <div className="AirportWind-card">
            <h3 className="windText"> { airportData.wind.speed_kts } knots - { airportData.wind.degrees } Degrees { airportData.wind.gust_kts ?  `- Gust: ${ airportData.wind.gust_kts } knots` : null } </h3>
        </div>
)};

export default AirportWind