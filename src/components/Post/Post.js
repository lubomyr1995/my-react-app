import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";

const Post = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {postId} = params

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            postsService.getByPostId(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])

    if (post) return (
        <div>
            <div>userId: {post.userId}. postId: {postId}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            <button onClick={() => navigate('/comments')}>hide post</button>
            <hr/>
        </div>
    );
};

export {Post};