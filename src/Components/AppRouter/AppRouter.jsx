import React from 'react';
import {publicRoutes} from "../../router";
import {Route,Routes} from "react-router-dom";
import Error from "../../pages/Error/Error";

const AppRouter = () => {

    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Route path='/*' element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;