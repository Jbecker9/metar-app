import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import RawMetar from "./RawMetar";
import AirportTitle from "./AirportTitle";
import AirportWind from "./AirportWind";

function AirportInfo(){
    const { airportData } = useContext(MetarContext)

    { airportData ? console.log(airportData) : null }
    return(
        <div>
                <AirportTitle />
                <AirportWind />
            <RawMetar />
        </div>
)};

export default AirportInfo