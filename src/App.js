import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, CatsPage, HomePage, NoteFoundPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'cats'} element={<CatsPage/>}/>
                <Route path={'*'} element={<NoteFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};