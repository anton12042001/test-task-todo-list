import React from 'react';
import cl from './NavbarHeader.module.css'

const NavbarHeader = () => {
    return (
        <div className={cl.navbarHeader} >
            <div className={cl.titleProject} >Название проекта</div>
            <div className={cl.abbreviation} >Аббревиатура</div>
        </div>
    );
};

export default NavbarHeader;