import React from 'react';
import cl from './Header.module.css'
import headerButtonSquare from '../../img/HeaderSquare.svg'
import {useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation()

    if(location.pathname !== '/'){
        return (
            <div className={cl.headerContainer} >
                <div className={cl.headerButtons} >
                    <div className={cl.ButtonSquare}>
                        <img src={headerButtonSquare}/>
                    </div>
                    <div className={cl.ButtonShow}>Просмотр</div>
                </div>
            </div>
        );
    }
};

export default Header;