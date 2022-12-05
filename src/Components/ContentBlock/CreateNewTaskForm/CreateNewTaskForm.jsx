import React from 'react';
import {useForm} from "react-hook-form";
import cl from './CreateNewTaskForm.module.css'

const CreateNewTaskForm = ({setShowPopapCreateTask}) => {

    const {
        register,
        handleSubmit,
        reset,

    } = useForm();

    const onSubmit = (data) => {
        reset()
        console.log("работает")
        setShowPopapCreateTask(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={cl.input} placeholder="Название" {...register('titleTask')} type="text"/>
                <button type={'submit'} className={cl.createNewTask}>Cоздать</button>
                <button type={"button"} onClick={() => setShowPopapCreateTask(false)} className={cl.createNewTask}>Отменить</button>
            </form>
        </div>
    );
};

export default CreateNewTaskForm;