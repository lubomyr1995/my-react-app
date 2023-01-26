import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

const App = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, [updatedCar]);

    return (
        <div>
            Hello API Car
            <CarForm setCars={setCars} updateCar={updateCar} setUpdatedCar={setUpdatedCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars cars={cars} setCars={setCars} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export {App};