import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import RawMetar from "./RawMetar";
import AirportTitle from "./AirportTitle";
import AirportWind from "./AirportWind";
import AirportClouds from "./AirportClouds";

function AirportInfo(){
    const { airportData } = useContext(MetarContext)
    console.log(airportData)

    // { airportData ? console.log(airportData) : null }
    return(
        <div>
            <AirportTitle />
            <AirportWind />
            <AirportClouds />
            <RawMetar />
        </div>
)};

export default AirportInfo