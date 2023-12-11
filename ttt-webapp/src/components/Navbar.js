import React, { useState } from 'react';
import logo from '../images/logottt1.png';
import { Icon } from '@iconify/react';

function Navbar() {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <nav className="navbar navbar-expand-sm custom-nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="LOGO TTT ENGLISH MISSION"
                        width={200}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!collapsed}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNav">
                    <div className="navbar-nav mx-auto d-md-none d-lg-none d-sm-none">
                        <a className="nav-link" href="#formations">
                            Formations
                        </a>
                        <a className="nav-link" href="#temoignages">
                            Témoignages
                        </a>
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                        <a className="nav-link" href="mailto:tttmission@gmail.com">
                            <Icon icon="clarity:email-solid" width={30} />
                        </a>
                    </div>
                    <div className="navbar-nav mx-auto d-none d-md-block">
                        <h3 className="navbar-text">
                            Fuel your passion with us
                        </h3>
                    </div>
                    <div className="navbar-nav mx-auto d-none d-sm-block">
                        <a href="mailto:tttmission@gmail.com"><Icon icon="clarity:email-solid" width={30} className='me-2' /> tttmission@gmail.com</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
