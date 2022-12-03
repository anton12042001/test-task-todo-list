import React, {useState} from 'react';
import cl from './Header.module.css'
import headerButtonSquare from '../../img/HeaderSquare.svg'
import {useLocation} from "react-router-dom";
import PopapCreateTodo from "./PopapCreateTodo/PopapCreateTodo";

const Header = () => {

    const [createTodoShowPopap,setCreateTodoShowPopap] = useState(false)
    const location = useLocation()

    if(location.pathname !== '/'){
        return (
            <div className={cl.headerContainer} >
                <div className={cl.headerButtons} >
                    <button onClick={() => setCreateTodoShowPopap(true)} className={cl.ButtonSquare}>
                        <img src={headerButtonSquare}/>
                    </button>
                    {(createTodoShowPopap) && <div className={cl.popapCreateTodo}>
                        <PopapCreateTodo setCreateTodoShowPopap={setCreateTodoShowPopap} />
                    </div>}
                    <div className={cl.ButtonShow}>Просмотр</div>
                </div>
            </div>
        );
    }
};

export default Header;