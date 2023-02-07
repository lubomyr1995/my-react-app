import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);
    return (
        <div>
            {selectedUser && <div>User: {selectedUser.name}</div>}
            {selectedPost && <div>Post: {selectedPost.title}</div>}
        </div>
    );
};

export {Header};