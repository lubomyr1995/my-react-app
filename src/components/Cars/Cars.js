import {useAppReducer} from "../../hooks";
import {Car} from "../Car/Car";

const Cars = () => {
    const [state, dispatch] = useAppReducer(reducers => reducers.carsReducer);
    return (
        <div>
            {state.cars && state.cars.map(car => <Car key={car.id} car={car} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cars};