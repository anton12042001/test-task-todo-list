import React, {useEffect, useState} from 'react';
import cl from './TaskPage.module.css'
import {useParams} from "react-router-dom";
import CreateNewTaskForm from "../../Components/ContentBlock/CreateNewTaskForm/CreateNewTaskForm";


const TaskPage = () => {
    const params = useParams()
    const [showPopapCreateTask,setShowPopapCreateTask] = useState(false)

    useEffect(() => {
        console.log(params)
       const res = localStorage.getItem(`${params.id}`)
        console.log(res)
    },[params.id])






    return (
        <div className={cl.taskContainer}>
            <div className={cl.createNewTaskButton} >
                <button onClick={() => setShowPopapCreateTask(true)} >Создать новую задачу</button>
            </div>
            {(showPopapCreateTask) && <CreateNewTaskForm setShowPopapCreateTask={setShowPopapCreateTask}/>}
        </div>
    );
};

export default TaskPage;