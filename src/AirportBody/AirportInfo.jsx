import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import RawMetar from "./RawMetar";
import AirportTitle from "./AirportTitle";

function AirportInfo(){
    const { airportData } = useContext(MetarContext)

    { airportData ? console.log(airportData) : null }
    return(
        <div>
            <AirportTitle />
            <RawMetar />
        </div>
)};

export default AirportInfo