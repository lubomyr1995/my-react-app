import {useReducer} from "react";

const App = () => {
    const init = (initializer) => {
        return {count: initializer, callCount: initializer}
    }

    const reducer = (state, action) => {
        state = {...state, callCount: state.callCount + 1}
        switch (action.type) {
            case 'dec':
                return {...state, count: state.count + 1}
            case 'inc':
                return {...state, count: state.count - 1}
            case 'res':
                return {...state, count: 0}
            case 'set':
                return {...state, count: action.payload}
            case 'resAll':
                return {...state, count: 0, callCount: 0}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, init);
    // const [state, dispatch] = useReducer(reducer, {count: 0, callCount: 0});
    return (
        <div>
            <div>count: {state.count}</div>
            <div>callCount: {state.callCount}</div>
            <button onClick={() => dispatch({type: 'dec'})}>dec</button>
            <button onClick={() => dispatch({type: 'inc'})}>inc</button>
            <button onClick={() => dispatch({type: 'res'})}>res</button>
            <button onClick={() => dispatch({type: 'resAll'})}>resAll</button>
            <button onClick={() => dispatch({type: 'set', payload: 5})}>setTo</button>
        </div>
    );
};

export {App};