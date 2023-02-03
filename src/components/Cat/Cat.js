import {actionsToDispatch} from "../../constants";

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat
    return (
        <div>
            <div>CAT:</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>
                <button onClick={()=>dispatch(actionsToDispatch.DEL_CAT_BY_ID(id))}>delete</button>
                <button onClick={()=>dispatch(actionsToDispatch.SET_CAT_TO_UPDATE(cat))}>update</button>
            </div>
            <br/>
        </div>
    );
};

export {Cat};