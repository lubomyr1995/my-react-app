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
                <button onClick={() => dispatch(actionsToDispatch.DEL_BY_ID(id))}>delete</button>
            </div>
            <br/>
        </div>
    );
};

export {User};