import React, { useContext, useState } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/AirportTemp.css"

function AirportTemp(){
    const { airportData } = useContext(MetarContext)
    const [fahrenheit, setFahrenheit] = useState(false)
    
    function renderFahrenheit(){
        setFahrenheit(true)
        document.getElementById("fahrenheit").style.backgroundColor = "#e7e7e7"
        document.getElementById("celsius").style.backgroundColor = "var(--border-color)"
    }

    function renderCelsius(){
        setFahrenheit(false)
        document.getElementById("fahrenheit").style.backgroundColor = "var(--border-color)"
        document.getElementById("celsius").style.backgroundColor = "#e7e7e7"
    }

    return(
    <div className="AirportTemp-container">
        <h3> { fahrenheit ? airportData.temperature.fahrenheit : airportData.temperature.celsius } </h3>
        <div className="AirportTemp-scales">
            <button id="celsius" className="AirportTemp-text" onClick={()=>renderCelsius()}>C</button>
            <button id="fahrenheit" className="AirportTemp-text" onClick={()=>renderFahrenheit()}>F</button>
        </div>
    </div>
)}

export default AirportTemp