import {actionsToDispatch} from "../../constants";

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog
    return (
        <div>
            <div>DOG:</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>
                <button onClick={() => dispatch(actionsToDispatch.DEL_DOG_BY_ID(id))}>delete</button>
                <button onClick={() => dispatch(actionsToDispatch.SET_DOG_TO_UPDATE(dog))}>update</button>
            </div>
            <br/>
        </div>
    );
};

export {Dog};