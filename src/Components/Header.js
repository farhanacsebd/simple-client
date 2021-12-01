import React from 'react';
import './Header.css';
import ReactTyped from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">

            <div className="main-info">

                <h2 className="fw-bold">Welcome</h2>
                <h2>I'm</h2>
                <h1 className="fw-bold" style={{ fontSize: "3rem" }}>Farhana Binte Hasan</h1>
                <ReactTyped
                    className="type-text fw-bold"
                    strings={["Web Design", "Web Development", "Font End Depelopment", "MERN Stack Developer"]}
                    typeSpeed={100}
                    backSpeed={40}
                    loop
                /><br />
                <a className="btn-main-offer fw-bold" href="https://drive.google.com/uc?export=download&id=1mbMk-9K7CeGkTpfdG37Lou8E2VDs1_BA" target="_blank">Downdoad Resume</a>
            </div>
        </div>
    );
};

export default Header;