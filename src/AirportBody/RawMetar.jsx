import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import "../styles/RawMetar.css"

function RawMetar(){ 
    const { airportData } = useContext(MetarContext)
    
    return(
        <div className="RawMetar-container">
            <h4> { airportData.raw_text } </h4>
        </div>
)}

export default RawMetar