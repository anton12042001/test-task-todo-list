import React, {useEffect} from 'react';
import cl from './TaskPage.module.css'
import {useParams} from "react-router-dom";


const TaskPage = () => {
    const params = useParams()

    useEffect(() => {
        console.log(params)
       const res = localStorage.getItem(`${params.id}`)
        console.log(res)
    },[params.id])




    return (
        <div className={cl.taskContainer}>

        </div>
    );
};

export default TaskPage;