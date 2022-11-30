import React from 'react';
import cl from './Navbar.module.css'
import NavbarHeader from "./NavbarHeader/NavbarHeader";

const Navbar = () => {
    return (
        <div className={cl.navbarContainer} >
            <NavbarHeader/>
        </div>
    );
};

export default Navbar;