import React, {useEffect, useState} from 'react';
import cl from './TaskPage.module.css'
import {useParams} from "react-router-dom";
import CreateNewTaskForm from "../../Components/ContentBlock/CreateNewTaskForm/CreateNewTaskForm";
import {useDispatch, useSelector} from "react-redux";
import {setTaskFromProject} from "../../reduxToolkit/slices/projectTasks";
import ContentBodyTask from "../../Components/ContentBlock/ContentBodyTask/ContentBodyTask";


const TaskPage = () => {
    const params = useParams()
    const [showPopapCreateTask, setShowPopapCreateTask] = useState(false)
    const dispatch = useDispatch()
    const {projectTasks} = useSelector(state => state.projectTasks)

    //todo поправить useEffect
    useEffect(() => {
        const data = {
            key: params.id
        }
        dispatch(setTaskFromProject(data))
    }, [params.id])


    return (
        <div className={cl.taskContainer}>
            {projectTasks.taskItem.map(i => <ContentBodyTask itemTask={i} /> )}
            {(params.id) &&
                <div className={cl.createNewTaskButton}>
                    <button onClick={() => setShowPopapCreateTask(!showPopapCreateTask)}>Создать новую задачу</button>
                </div>}
            {(showPopapCreateTask) && <CreateNewTaskForm setShowPopapCreateTask={setShowPopapCreateTask}/>}
        </div>
    );
};

export default TaskPage;