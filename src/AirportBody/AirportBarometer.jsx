import React, { useState } from "react";
import AirportBarometerSwitch from "./AirportBarometerSwitch";

function AirportBarometer(){
    const [baroMeasurement, setBaroMeasurement] = useState("inHg")

    return(
        <div>
            <AirportBarometerSwitch baroMeasurement={baroMeasurement} />
            <button className="AirportBarometer-button" id="inHg" onClick={(event) => setBaroMeasurement(event.target.id)}>inHg</button>
            <button className="AirportBarometer-button" id="hPa" onClick={(event) => setBaroMeasurement(event.target.id)}>hPa</button>
            <button className="AirportBarometer-button" id="kPa" onClick={(event) => setBaroMeasurement(event.target.id)}>kPa</button>
            <button className="AirportBarometer-button" id="mb" onClick={(event) => setBaroMeasurement(event.target.id)}>mb</button>
        </div>
)};

export default AirportBarometer