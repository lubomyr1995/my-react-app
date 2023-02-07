import {useDispatch, useSelector} from "react-redux";
import {Post} from "../Post/Post";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/post.slice";

const Posts = () => {
    const {posts, status} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [dispatch])

    return (
        <div>
            <h1>{status && <div>LOADING...............................</div>}</h1>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};