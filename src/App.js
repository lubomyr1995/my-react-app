import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, UsersPage} from "./Pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};