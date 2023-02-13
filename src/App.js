import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarsPage, HomePage, LoginPage, NotFoundPage, RegisterPage} from "./pages";
import {AuthRequire} from "./hoc";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route element={<AuthRequire><AuthRequireLayout/></AuthRequire>}>
                        <Route path={'cars'} element={<CarsPage/>}/>
                    </Route>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};