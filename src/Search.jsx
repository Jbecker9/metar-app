import React, { useState } from "react";
import "./styles/Search.css"

function Search(){
    const [searchParamaters, setSearchParamaters] = useState('')

    function handleInputChange(event){
        event.preventDefault()
        setSearchParamaters(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
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