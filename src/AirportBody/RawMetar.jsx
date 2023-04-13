import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";

function RawMetar(){ 
    const { airportData } = useContext(MetarContext)
    
    return(
        <div>
            <h4> { airportData.raw_text } </h4>
        </div>
)}

export default RawMetar