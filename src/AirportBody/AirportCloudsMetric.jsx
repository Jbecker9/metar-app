import React from "react";

function AirportCloudsMetric({ cloudLevel }){

    return(
        <div>
            { cloudLevel.base_meters_agl ? <h3> { cloudLevel.base_meters_agl }m {cloudLevel.text}</h3> : <h3> { cloudLevel.text } </h3> }
        </div>
)};

export default AirportCloudsMetric