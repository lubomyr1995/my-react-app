import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postsService} from "../../services";

const Posts = ({postsById}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getById(postsById).then(value => setPosts(value.data))
    }, [postsById]);

    return (
        <div>
            {!!posts.length && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};