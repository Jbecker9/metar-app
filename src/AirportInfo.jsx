import React, { useContext } from "react";
import { MetarContext } from "./context/Metar";

function AirportInfo(){
    const { airportData } = useContext(MetarContext)

    console.log(airportData)
    return(
        <div>
            
        </div>
)};

export default AirportInfo