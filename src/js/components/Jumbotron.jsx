import React from "react";
import Home from "./Home";

const Jumbotron = (props) => {

    return (
        <div className="bg-secondary-subtle jumbotron-container">
            <h1>{props.title}</h1>
            <p> {props.description} </p>
            <button type="button" className="btn btn-primary">Call to action</button>
        </div>
    )
}


export default Jumbotron