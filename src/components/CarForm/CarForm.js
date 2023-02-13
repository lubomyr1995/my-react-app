import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();
    const {updateCar} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar, setValue])

    const create = (newCar) => {
        if (updateCar) {
            dispatch(carActions.updateCarById({id: updateCar.id, car: newCar}))
        } else {
            dispatch(carActions.create({car: newCar}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <div><label>Brand: <input type="text" {...register('brand')}/></label></div>
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>{updateCar ? 'update' : 'create'}</button>
        </form>
    );
};

export {CarForm};