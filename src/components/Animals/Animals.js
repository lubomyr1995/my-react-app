import {useEffect, useRef} from "react";
import {useAnimalsReducer} from "../../hooks";
import {actionsToDispatch} from "../../constants";
import {Cat} from "../Cat/Cat";
import {Dog} from "../Dog/Dog";

const Animals = () => {
    const catRef = useRef();
    const dogRef = useRef();
    const [state, dispatch] = useAnimalsReducer();

    useEffect(() => {
        if (state.cat) {
            catRef.current.value = state.cat.name
        }
        if (state.dog) {
            dogRef.current.value = state.dog.name
        }

    }, [state.cat, state.dog])

    const addCat = () => {
        const newCat = catRef.current.value
        if (state.cat) {
            dispatch(actionsToDispatch.UPDATE_CAT_BY_ID(state.cat.id, newCat))
        } else {
            dispatch(actionsToDispatch.ADD_CAT(newCat));
        }
        catRef.current.value = '';
    }

    const addDog = () => {
        const newDog = dogRef.current.value
        if (state.dog) {
            dispatch(actionsToDispatch.UPDATE_DOG_BY_ID(state.dog.id, newDog))
        } else {
            dispatch(actionsToDispatch.ADD_DOG(newDog));
        }
        dogRef.current.value = '';
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                    <input type="text" ref={catRef}/>
                    <button onClick={addCat}>{state.cat ? 'updateCat' : 'addCat'}</button>
                </div>
                <div>
                    <input type="text" ref={dogRef}/>
                    <button onClick={addDog}>{state.dog ? 'updateDog' : 'addDog'}</button>
                </div>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>{state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}</div>
                <div>{state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}</div>
            </div>
        </div>
    );
};

export {Animals};