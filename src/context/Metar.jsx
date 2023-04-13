import React, { useState } from "react";

const MetarContext = React.createContext();

function MetarProvider({children}){
    const [airportData, setAirportData] = useState(null)

    // console.log(airportData)

    return <MetarContext.Provider value={{ airportData, setAirportData }} >{children}</MetarContext.Provider>
};

export { MetarContext, MetarProvider }