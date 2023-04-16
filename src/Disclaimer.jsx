import React from "react";
import "./styles/Disclaimer.css"

function Disclaimer(){

    return(
        <div className="Disclaimer-container">
            <h3 className="Disclaimer-text">!! This Application is a personal project and is not intended for professional or real-time use !!</h3>
            <h4 className="Disclaimer-ownerText"> Creator: Jared Becker </h4>
            <a href="https://www.linkedin.com/in/jaredbecker-se/" >
            <i className="fa-brands fa-linkedin fa-2x" style={{color: "#e7e7e7"}} id="linkedIn"></i>
            </a>
            <a href="https://github.com/Jbecker9">
            <i className="fa-brands fa-square-github fa-2x" style={{color: "#e7e7e7"}} id="gitHub"></i>
            </a>
        </div>
)};

export default Disclaimer