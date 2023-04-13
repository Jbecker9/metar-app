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
        fetch(`https://api.checkwx.com/metar/${searchParamaters}?x-api-key=${import.meta.env.VITE_AVIATION_API_KEY}`)
        .then((response) => response.json())
        .then((metarData) => console.log(metarData.data[0]))
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