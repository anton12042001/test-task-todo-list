import React from 'react';
import cl from './ContentHeader.module.css'
import {useSelector} from "react-redux";

const ContentHeader = () => {

    const {currentTaskName} = useSelector(state => state.currentTask)

    return (
        <div className={cl.contentHeader} >
            {(currentTaskName !== '' && <div className={cl.titleTodo} >{currentTaskName}</div>)}
        </div>
    );
};

export default ContentHeader;