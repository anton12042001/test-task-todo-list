import React from 'react';
import { useForm } from "react-hook-form";
import cl from "./InputCreateTodo.module.css"

const InputCreateTodo = ({}) => {

    const {
        register,
        handleSubmit,
        reset,

    } = useForm();

    const onSubmit = (data) => {
        reset()
        debugger
        localStorage.setItem("todoItem2",data.titleTodo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={cl.input} placeholder="Название" {...register('titleTodo')} type="text"/>
                <button>Cоздать</button>
            </form>
        </div>
    );
};

export default InputCreateTodo;