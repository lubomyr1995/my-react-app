import {actionsToDispatch} from "../../constants";

const User = ({user, dispatch}) => {
    const {id, name, surname, age} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <div>
                <button onClick={() => dispatch(actionsToDispatch.DEL(id))}>delete</button>
                <button onClick={() => dispatch(actionsToDispatch.SET(user))}>update</button>
            </div>
        </div>
    );
};

export {User};