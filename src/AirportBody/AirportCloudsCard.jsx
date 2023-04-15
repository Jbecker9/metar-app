import React from "react";
import AirportCloudsImperial from "./AirportCloudsImperial";
import AirportCloudsMetric from "./AirportCloudsMetric";

function AirportCloudsCard({ cloudLevel, unit }){
    // console.log(cloudLevel)
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

export default AirportCloudsCard