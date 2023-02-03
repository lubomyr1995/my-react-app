import {useAppReducer} from "../../hooks";
import {Cat} from "../Cat/Cat";

const Cats = () => {
    const [state, dispatch] = useAppReducer(reducers => reducers.catsReducer);
    return (
        <div>
            {state.cats && state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};