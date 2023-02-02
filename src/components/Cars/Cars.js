import {useAppReducer} from "../../hooks";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, dispatch] = useAppReducer(redusers => redusers.carReducer);

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cars};