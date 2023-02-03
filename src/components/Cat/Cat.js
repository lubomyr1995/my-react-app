import {actionsToDispatch} from "../../constants";

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>
                <button onClick={() => dispatch(actionsToDispatch.DEL(id))}>delete</button>
                <button onClick={() => dispatch(actionsToDispatch.SET(cat))}>update</button>
            </div>
            <br/>
        </div>
    );
};

export {Cat};