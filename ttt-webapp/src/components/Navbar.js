import React from 'react';
import logo from '../images/logottt1.png';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm custom-nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="LOGO TTT ENGLISH MISSION"
                        width={200}
                    />
                </a>
                <div className="d-flex mx-auto">
                    <h3 className="navbar-text">
                        Fuel your passion
                    </h3>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
