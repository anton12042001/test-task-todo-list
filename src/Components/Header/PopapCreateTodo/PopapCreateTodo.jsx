import React from 'react';
import cl from './PopapCreateTodo.module.css'
import InputCreateTodo from "../InputCreateTodo/InputCreateTodo";

const PopapCreateTodo = ({setCreateTodoShowPopap}) => {
    return (
        <div className={cl.popapContainer}>
            <div className={cl.titlePopap} >
                <div>Введите название вашей задачи</div>
                <div className={cl.closedPopap} onClick={() => setCreateTodoShowPopap(false)} >Х</div>
            </div>
            <InputCreateTodo setCreateTodoShowPopap={setCreateTodoShowPopap}/>
        </div>
    );
};

export default PopapCreateTodo;