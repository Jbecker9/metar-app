import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportWind.css"

function AirportWind(){
    const { airportData } = useContext(MetarContext)
    // const [windDirection, setWindDirection] = useState(windToCardinalDirection())
    const cardinalDirections = {
        north: 0 && 360,
        northNorthEast: 22.5,
        northEast: 45,
        eastNorthEast: 67.5,
        east: 90,
        eastSouthEast: 112.5,
        southEast: 135,
        southSouthEast: 157.5,
        south: 180,
        southSouthWest: 202.5,
        southWest: 225,
        westSouthWest: 247.5,
        west: 270,
        westNorthWest: 292.5,
        northWest: 315,
        northNorthWest: 337.5
    }
    const direction = cardinalDirections.reduce((a, b) => Math.abs(b - airportData.wind.speed_kts) < Math.abs(a - airportData.wind.speed_kts) ? b : a )
    console.log(direction)

    return(
        <div className="AirportWind-card">
            <h3 className="windText"> { airportData.wind.speed_kts } knots - { airportData.wind.degrees } Degrees </h3>
            { airportData.wind.gust_kts ? <h3 className="windText"> Gust { airportData.wind.gust_kts }kts </h3> : null }
        </div>
)};

export default AirportWind