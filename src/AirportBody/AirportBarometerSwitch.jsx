import React, { useContext } from "react";
import { MetarContext } from "../context/Metar";

function AirportBarometerSwitch({ baroMeasurement }){
    const { airportData } = useContext(MetarContext)

    switch(baroMeasurement){
        case("inHg"):
            return( 
                <div>
                    <h3>{ airportData.barometer.hg }</h3>
                </div>)
            break;
        case("hPa"):
            return(
                <div>
                    <h3>{ airportData.barometer.hpa }</h3>
                </div>)
            break;
        case("kPa"):
            return( 
                <div>
                    <h3>{ airportData.barometer.kpa }</h3>
                </div>)
            break;
        case("mb"):
            return( 
                <div>
                    <h3>{ airportData.barometer.mb }</h3>
                </div>)
            break;
    }

};

export default AirportBarometerSwitch