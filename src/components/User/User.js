const User = ({user, setDetails, setPostsById}) => {
    let {id, name} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => {
                setDetails(user)
                setPostsById(null)
            }}>showDetails</button>
            <br/>
        </div>
    );
};

export {User};