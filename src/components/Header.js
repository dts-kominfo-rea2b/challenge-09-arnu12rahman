// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <h1 className="header-title">Call a Friend</h1>
                <p className="header-desc">your friendly contact app</p>
                <hr className="header-hr" />
            </div>
        </header>
    );
};

export default Header;
