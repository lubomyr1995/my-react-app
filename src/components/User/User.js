const User = ({user, setDetails}) => {
    let {id, name} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => setDetails(user)}>showDetails</button>
            <br/>
        </div>
    );
};

export {User};