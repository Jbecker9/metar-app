import React, { useState } from "react";

const MetarContext = React.createContext();

function MetarProvider({children}){
    const [airportData, setAirportData] = useState(null)
    // const cardinalDirectionsObject = {
    //     N: 0,
    //     NNE: 22.5,
    //     NE: 45,
    //     ENE: 67.5,
    //     E: 90,
    //     ESE: 112.5,
    //     SE: 135,
    //     SSE: 157.5,
    //     S: 180,
    //     SSW: 202.5,
    //     SW: 225,
    //     WSW: 247.5,
    //     W: 270,
    //     WNW: 292.5,
    //     NW: 315,
    //     NNW: 337.5,
    //     N: 360
    // }
    // const [cardinalDirection, setCardinalDirection] = useState(findClosestDegree())
    // console.log(cardinalDirection)

    // function lowestValueAndKey(obj) {
    //     var [lowestItems] = Object.entries(obj).sort(([ ,v1], [ ,v2]) => v1 - v2);
    //     return parseInt(lowestItems[0])
    //   }

    // function findClosestDegree(){
    //     let i;
    //     let reducedValuesAndDegrees = {}
    //     const cardinalDirectionInDegrees = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5, 360]
    //     for(i = 0; i < cardinalDirectionInDegrees.length; i++){
    //         let number = cardinalDirectionInDegrees[i]
    //         let value = Math.abs(number - airportData.wind.degrees)
    //         reducedValuesAndDegrees = {
    //             ...reducedValuesAndDegrees,
    //             [number]: value
    //         }
    //     } 
    //     return (lowestValueAndKey(reducedValuesAndDegrees))
    // }

    // function findCardinalDirection(){
    //     for ( degree in cardinalDirectionsObject )
    // }

    return <MetarContext.Provider value={{ airportData, setAirportData }} >{children}</MetarContext.Provider>
};

export { MetarContext, MetarProvider }