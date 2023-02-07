import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/post.slice";

const Post = ({post}) => {
    const {userId, id, title} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>userId: {userId}; id: {id}</div>
            <div>{title}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>setPost</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>setPostWithApi</button>
            <br/>
        </div>
    );
};

export {Post};