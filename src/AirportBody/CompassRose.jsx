import React, { useContext } from "react";
import "../styles/CompassRose.css"
import { MetarContext } from "../context/Metar";

function CompassRose(){
    const { airportData } = useContext(MetarContext)

    return(
        <div className="compass">
            <div className="needleHand"> 
                <div className="degrees">
                    { airportData.wind.degrees }
                </div>
            </div>
            <div className="number degree0"> N </div>
            <div className="number degree22point5"> NNE </div>
            <div className="number degree45"> NE </div>
            <div className="number degree67point5"> ENE </div>
            <div className="number degree90"> E </div>
            <div className="number degree112point5"> ESE </div>
            <div className="number degree135"> SE </div>
            <div className="number degree157point5"> SSE </div>
            <div className="number degree180"> S </div>
            <div className="number degree202point5"> SSW </div>
            <div className="number degree225"> SW </div>
            <div className="number degree247point5"> WSW </div>
            <div className="number degree270"> W </div>
            <div className="number degree292point5"> WNW </div>
            <div className="number degree315"> NW </div>
            <div className="number degree337point5"> NNW </div>
        </div>
)};

export default CompassRose