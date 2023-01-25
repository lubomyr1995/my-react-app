export const Post = ({post: {userId, title, body}}) => {
    return (
        <div>
            <b>{userId}</b>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};