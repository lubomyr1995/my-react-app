import {carService} from "../../services";

const Car = ({car, setCars, setUpdateCar}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => {
                carService.deleteById(id).then(async () => {
                    const {data} = await carService.getAll();
                    setCars([...data])
                }).catch(err => console.log(err))
            }
            }>delete car
            </button>
            <br/>
        </div>
    );
};

export {Car};