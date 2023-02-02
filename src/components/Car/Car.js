import {actionsToDispatch} from "../../constants";

const Car = ({car, dispatch}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>
                <button onClick={() => dispatch(actionsToDispatch.DEL_BY_ID(id))}>delete</button>
            </div>
        </div>
    );
};

export {Car};