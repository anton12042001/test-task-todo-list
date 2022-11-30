import React from "react"
import {BrowserRouter} from 'react-router-dom'
import Header from "./Components/Header/Header";
import cl from './App.module.css'
import AppRouter from "./Components/AppRouter/AppRouter";
import {store} from "./reduxToolkit";
import {Provider} from "react-redux";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={cl.appWrapper}>
                    <div>
                        <Header/>
                        <div className={cl.navbarContent} >
                            <Navbar/>
                        </div>
                    </div>
                    <AppRouter/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
