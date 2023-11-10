import React from 'react';
import "./Header.css";
import Logo from "../../medias/logo/logo.svg";
import { TfiWorld } from "react-icons/tfi";

const Header = () => {
    return (
        <header className='header-content'>
            <div className="logo"><img src={Logo} alt="tesla logo" /></div>
            <div className="select-language"><TfiWorld /><p>FR</p></div>
        </header>
    );
};

export default Header;