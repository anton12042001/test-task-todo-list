import React, {useState} from 'react';
import cl from './ContentBodyTask.module.css'
import taskIcon from '../../../img/ContentProjectTaskIcon.svg'
import deleteTaskIcon from '../../../img/deleteTaskIcon.svg'

const ContentBodyTask = ({itemTask}) => {

    const [showHover,setShowHover] = useState(false)

    return (
        <div onMouseOut={() => setShowHover(false)}
             onMouseOver={() => setShowHover(true)}
             className={(showHover) ? cl.itemContainerActive : cl.itemContainer} >
            {(showHover) && <div className={cl.deleteTask} ><img src={deleteTaskIcon}/></div>}
            <div className={cl.taskIcon} ><img src={taskIcon}/></div>
            <div>{itemTask}</div>

        </div>
    );
};

export default ContentBodyTask;