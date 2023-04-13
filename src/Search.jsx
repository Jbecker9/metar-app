import React, { useState } from "react";
import "./styles/Search.css"
import env from "react-dotenv"

function Search(){
    const [searchParamaters, setSearchParamaters] = useState('')

    function handleInputChange(event){
        event.preventDefault()
        setSearchParamaters(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(import.meta.env.VITE_AVIATION_API_KEY)
        // fetch(`https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true&stationString=${searchParamaters}`)
        // .then((response) => response.json())
        // .then((data) => console.log(data))
    }

    return(
        <div className="Search-div">
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} className="Search-input" placeholder="Search ICAO, IATA, Name..."/>
                <button className="Search-button">
                    <i className="fa-solid fa-plane fa-inverse fa-2x"></i>
                </button>
            </form>
        </div>
)}

export default Search