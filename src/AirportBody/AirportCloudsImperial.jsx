import React from "react";

function AirportCloudsImperial({ cloudLevel }){

    return(
        <div>
            { cloudLevel.base_feet_agl ? <h3> { cloudLevel.base_feet_agl }ft {cloudLevel.text} </h3> : <h3> { cloudLevel.text } </h3> }
        </div>
)};

export default AirportCloudsImperial