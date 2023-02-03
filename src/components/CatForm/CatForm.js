import {useEffect, useRef} from "react";
import {useAppReducer} from "../../hooks";
import {actionsToDispatch} from "../../constants";

const CatForm = () => {
        const [state, dispatch] = useAppReducer(reducers => reducers.catsReducer);
        const catRef = useRef();

        useEffect(() => {
                if (state.cat) {
                    catRef.current.value = state.cat.name
                }
            }, [state]
        )

        const addCat = () => {
            const newCat = catRef.current.value
            if (state.cat) {
                dispatch(actionsToDispatch.UPDATE(state.cat.id, newCat))
            } else {
                dispatch(actionsToDispatch.ADD({name: newCat}))
            }
            catRef.current.value = ''
        }

        return (
            <div>
                <input type="text" ref={catRef}/>
                <button onClick={addCat}>{state.cat ? 'update' : 'add'}</button>
            </div>
        );
    }
;

export {CatForm};