const Album = ({album:{id, userId, title}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <br/>
        </div>
    );
};

export {Album};