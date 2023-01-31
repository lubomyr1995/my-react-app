import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, AlbumsPage, CommentsPage, HomePage, LoginPage, NotFoundPage, ToDosPage} from "./pages";
import {Post} from "./components/Post/Post";
import {RequireAuth} from "./hoc";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'todos'} element={
                    <RequireAuth>
                        <ToDosPage/>
                    </RequireAuth>}/>
                <Route path={'albums'} element={<RequireAuth><AlbumsPage/></RequireAuth>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};