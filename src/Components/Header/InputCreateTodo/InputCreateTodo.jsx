import React from 'react';
import { useForm } from "react-hook-form";
import cl from "./InputCreateTodo.module.css"
import {getTask} from "../../../reduxToolkit/slices/taskSlice";
import {useDispatch} from "react-redux";

const InputCreateTodo = ({}) => {

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,

    } = useForm();

    const onSubmit = (data) => {
        reset()
        localStorage.setItem(`${localStorage.length}`,data.titleTodo)
        dispatch(getTask())
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