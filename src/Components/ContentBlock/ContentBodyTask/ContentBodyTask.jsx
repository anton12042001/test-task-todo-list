import React, {useState} from 'react';
import cl from './ContentBodyTask.module.css'
import taskIcon from '../../../img/ContentProjectTaskIcon.svg'
import deleteTaskIcon from '../../../img/deleteTaskIcon.svg'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTaskFromProject} from "../../../reduxToolkit/slices/projectTasks";

const ContentBodyTask = ({itemTask,id}) => {
    const params = useParams()
    const [showHover,setShowHover] = useState(false)
    const dispatch = useDispatch()


    const deleteItemTask = () => {
        const data = {
            idProject:params.id,
            id
        }
        dispatch(deleteTaskFromProject(data))
    }

    return (
        <div onMouseOut={() => setShowHover(false)}
             onMouseOver={() => setShowHover(true)}
             className={(showHover) ? cl.itemContainerActive : cl.itemContainer} >

            {(showHover) && <div onClick={deleteItemTask} className={cl.deleteTask} ><img src={deleteTaskIcon}/></div>}

            <div className={cl.taskIcon} ><img src={taskIcon}/></div>
            <div>{itemTask}</div>

        </div>
    );
};

export default ContentBodyTask;