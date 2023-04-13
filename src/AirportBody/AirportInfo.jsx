import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";
import RawMetar from "./RawMetar";
import AirportTitle from "./AirportTitle";
import AirportWind from "./AirportWind";
import "../styles/AirportInfo.css"

function AirportInfo(){
    const { airportData } = useContext(MetarContext)

    { airportData ? console.log(airportData) : null }
    return(
        <div>
            <div className="AirportInfo-infoDiv">
                <AirportWind />
                <AirportTitle />
            </div>
            <RawMetar />
        </div>
)};

export default AirportInfo