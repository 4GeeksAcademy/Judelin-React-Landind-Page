import React from "react";
import Home from "./Home";

const Navbar = (props) => {

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid bg-secondary">
    <a className="navbar-brand p-2 fs-1 text-light" href="#">CEM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-flex" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-disabled="true">Services</a>
        </li>
           <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    )
}


export default Navbar