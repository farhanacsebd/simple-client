import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black" }}>
            <div className="container">
                <a className="navbar-brand text-white" href="#"><img style={{ width: "220PX ", height: "60PX" }} src="https://i.ibb.co/zs2nyV4/Farhana-designstyle-popstar-m-removebg-preview.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "white" }}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#about">AboutMe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#project">Projects</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#blog">Blog</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;