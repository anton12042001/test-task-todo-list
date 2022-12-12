import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import cl from './Error.module.css'

const Error = () => {
    const navigate = useNavigate()
    const [counter,setCounter] = useState(5)

    useEffect(() => {
        if(counter > 0){
            setTimeout(() => {
                setCounter(counter -1)
            },1000)
        }
        if(counter < 1){
            navigate('/task')
        }
    },[counter])
    return (
        <div className={cl.info} >
            Вы перешли на не существующую страницу
            Вы будете перенаправлены на главную страницу через {counter}
        </div>
    );
};

export default Error;