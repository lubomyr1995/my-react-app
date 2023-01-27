import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <b>{name}</b>
            <div><button onClick={()=>navigate(postId.toString())}>show post</button> postId: {postId}</div>
            <div>email: {email}</div>
            <p>body: {body}</p>
            <br/>
        </div>
    );
};

export {Comment};