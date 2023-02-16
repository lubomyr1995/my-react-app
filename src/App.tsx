import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, HomePage} from "./pages";
import {CarDetails} from "./components";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'cars'} element={<CarsPage/>}>
                    <Route path={':id'} element={<CarDetails/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export {App};