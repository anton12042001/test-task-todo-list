import React, {useEffect} from 'react';
import cl from './TaskPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getTask} from "../../reduxToolkit/slices/taskSlice";
import {useParams} from "react-router-dom";

const TaskPage = () => {
    const {task} = useSelector(state => state.task)
    const params = useParams()
    console.log(task)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTask())
    },[params.id])

    return (
        <div className={cl.taskContainer}>

        </div>
    );
};

export default TaskPage;