import React from 'react';
import todoNameIcon from '../../../img/todoTitleIcon.svg'
import cl from './NavbarTodoItems.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentTask} from "../../../reduxToolkit/slices/currentTaskSlice";

const NavbarTodoItems = ({todoName,id}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const burnCurrentTodo = () => {
        dispatch(setCurrentTask(todoName))
        navigate(`/task/${id}`)
    }


    return (
        <div onClick={burnCurrentTodo} className={cl.todoItem} >
            <div><img src={todoNameIcon}/> </div>
            <div>{todoName}</div>
        </div>
    );
};

export default NavbarTodoItems;