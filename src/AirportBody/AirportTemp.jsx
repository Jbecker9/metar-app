import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportTemp.css"

function AirportTemp(){
    const { airportData } = useContext(MetarContext)
    const [fahrenheit, setFahrenheit] = useState(false)

    return(
    <div className="AirportTemp-container">
        <h3> { fahrenheit ? airportData.temperature.fahrenheit : airportData.temperature.celsius } </h3>
        <h3 id="celsius" className="AirportTemp-text" onClick={() => setFahrenheit(false)}>C</h3>
        <h3>/</h3>
        <h3 id="fahrenheit" className="AirportTemp-text" onClick={() => setFahrenheit(true)}>F</h3>
    </div>
)}

export default AirportTemp