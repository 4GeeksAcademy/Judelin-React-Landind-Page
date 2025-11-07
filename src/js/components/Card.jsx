import React from "react";
import Home from "./Home";

const Card = (props) => {
    // let style = { width: "19.2rem" }

    return (
        <div className="card-sect">
            <div className="card ">
                <img src={props.imageUrl} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                  <div className="anchor-card">
                      <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                  </div>
                </div>
            </div>
        </div>
    )
}


export default Card