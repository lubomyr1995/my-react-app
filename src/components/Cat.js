import {useDispatch} from "react-redux";
import {catsActions} from "../redux";

const Cat = ({cat}) => {
    const {id, name} = cat;
    const dispatch = useDispatch();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>
                <button onClick={() => dispatch(catsActions.del({id}))}>delete</button>
                <button onClick={() => dispatch(catsActions.setValue({cat}))}>update</button>
            </div>
        </div>
    );
};

export {Cat};