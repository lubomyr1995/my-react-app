const ToDo = ({todo}) => {
    const {id, userId, title, completed} = todo
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed ? 'completed' : 'not completed'}</div>
            <br/>
        </div>
    );
};

export {ToDo};