const Details = ({details, onHide, onShowPosts}) => {
    let {id, name, username} = details;
    return (
        <div>
            {id}--{name}--{username}
            <button onClick={() => onShowPosts(id)}>ShowPosts</button>
            <button onClick={() => {
                onHide(null)
                onShowPosts(null)
            }}>Hide</button>
        </div>
    );
};

export {Details};