import React, { useContext, useState } from "react";
import "./styles/Search.css"
import { MetarContext } from "./context/Metar";

function Search(){
    const [searchParams, setSearchParams] = useState('')
    const { setAirportData } = useContext(MetarContext)

    function handleSubmit(event){
        event.preventDefault()
        fetch(`https://api.checkwx.com/metar/${searchParams}/decoded?x-api-key=${import.meta.env.VITE_AVIATION_API_KEY}`)
        .then((response) => response.json())
        .then((metarData) => setAirportData(metarData.data[0]))
    }

    return(
        <div className="Search-div">
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setSearchParams(event.target.value)} className="Search-input" placeholder="Search ICAO, IATA, Name..."/>
                <button className="Search-button">
                    <i className="fa-solid fa-plane fa-inverse fa-2x"></i>
                </button>
            </form>
        </div>
)}

export default Search