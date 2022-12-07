import React from 'react';
import {useForm} from "react-hook-form";
import cl from './CreateNewTaskForm.module.css'
import {useParams} from "react-router-dom";
import {setTaskFromProject} from "../../../reduxToolkit/slices/projectTasks";
import {useDispatch} from "react-redux";

const CreateNewTaskForm = ({setShowPopapCreateTask}) => {
    const params = useParams()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,

    } = useForm();

    const onSubmit = (data) => {
        const keyData = {
            taskProject:data.taskProject,
            key:params.id
        }
        dispatch(setTaskFromProject(keyData))
        setShowPopapCreateTask(false)
        reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={cl.input} placeholder="Название" {...register('taskProject')} type="text"/>
                <button type={'submit'} className={cl.createNewTask}>Cоздать</button>
                <button type={"button"} onClick={() => setShowPopapCreateTask(false)} className={cl.createNewTask}>Отменить</button>
            </form>
        </div>
    );
};

export default CreateNewTaskForm;