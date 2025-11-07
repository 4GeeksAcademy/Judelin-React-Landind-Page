import React from "react";
import Home from "./Home";

const Footer = (props) => {
    return(
        <div className="footer-section bg-secondary">
            <p>{props.description}</p>
        </div>
    )
}

export default Footer