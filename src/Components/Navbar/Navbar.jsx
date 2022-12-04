import React, {useEffect, useState} from 'react';
import cl from './Navbar.module.css'
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import {useDispatch, useSelector} from "react-redux";
import NavbarTodoItems from "./NavbarTodoItems/NavbarTodoItems";
import {getTask} from "../../reduxToolkit/slices/taskSlice";

const Navbar = () => {
    const {task} = useSelector(state => state.task)
    const dispatch = useDispatch()
    const [showNavbar,setShowNavbar] = useState(false)

    useEffect(() => {
        dispatch(getTask())
    },[])


    return (
        <div className={cl.navbarWrapper} >
            <div className={(showNavbar) ? cl.navbarContainerActive : cl.navbarContainer} >
                <NavbarHeader/>
                {task.map((t) => <NavbarTodoItems key={t.id} todoName={t.todoName} id={t.id}/>)}
            </div>
            <button
                onClick={() => setShowNavbar(!showNavbar)}
                className={(showNavbar) ? cl.openNavbarLeft : cl.openNavbarRight }
            >
                
            </button>
        </div>
    );
};

export default Navbar;