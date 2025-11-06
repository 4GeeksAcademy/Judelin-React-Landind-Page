import React from "react";
import Home from "./Home";

const Card = (props) => {
    let style = { width: "18rem" }

    return (
        <div>
            <div className="card " style={style}>
                <img src={props.imageUrl} className="card-img-top" alt="phot" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    )
}


export default Card