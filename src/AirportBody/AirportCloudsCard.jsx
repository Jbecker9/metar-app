import React from "react";
import AirportCloudsImperial from "./AirportCloudsImperial";
import AirportCloudsMetric from "./AirportCloudsMetric";

function AirportCloudsUnitCheck({ cloudLevel, unit }){

    if (unit){
        return(
            <AirportCloudsImperial cloudLevel={cloudLevel} />
        )
    } else {
        return(
            <AirportCloudsMetric cloudLevel={cloudLevel} />
        )
    }

};

export default AirportCloudsUnitCheck