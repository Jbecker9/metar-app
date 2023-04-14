import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportTemp.css"

function AirportTemp(){
    const { airportData } = useContext(MetarContext)
    const [fahrenheit, setFahrenheit] = useState(false)
    
    function renderFahrenheit(){
        const fahrenheitElement = document.getElementById("fahrenheit")
        const celsiusElement = document.getElementById("celsius")
        setFahrenheit(true)
        fahrenheitElement.style.color = "#e7e7e7"
        celsiusElement.style.color = "var(--background-color)"
    }

    function renderCelsius(){
        const fahrenheitElement = document.getElementById("fahrenheit")
        const celsiusElement = document.getElementById("celsius")
        setFahrenheit(false)
        celsiusElement.style.color = "#e7e7e7"
        fahrenheitElement.style.color = "var(--background-color)"
    }

    return(
    <div className="AirportTemp-container">
        <h3> { fahrenheit ? airportData.temperature.fahrenheit : airportData.temperature.celsius } </h3>
        <div className="AirportTemp-scales">
            <h3 id="celsius" className="AirportTemp-text tempCelsius" onClick={renderCelsius}>C</h3>
            <h3 className="AirportTemp-spacing">/</h3>
            <h3 id="fahrenheit" className="AirportTemp-text" onClick={renderFahrenheit}>F</h3>
        </div>
    </div>
)}

export default AirportTemp