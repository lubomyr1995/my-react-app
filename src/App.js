import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, ToDosPage} from "./pages";
import {Post} from "./components/Post/Post";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'todos'} element={<ToDosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};