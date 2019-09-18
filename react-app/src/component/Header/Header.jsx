import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-5">
                <NavLink className="navbar-brand d-flex" to="/">
                    <img src={require('../../assets/images/react-logo.png')} alt="Logo" className="Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ourteam">Our Team</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;