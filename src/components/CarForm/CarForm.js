import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();

    const {carUpdate, errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    }, [carUpdate, setValue])

    const submit = async (newCar) => {
        if (carUpdate) {
            await dispatch(carActions.updateById({id: carUpdate.id, car: newCar}))
        } else {
            await dispatch(carActions.create({car: newCar}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Brand: <input type="text" {...register('brand')}/></label></div>
            {errors.brand && <b>{errors.brand}</b>}
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            {errors.price && <b>{errors.price}</b>}
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            {errors.year && <b>{errors.year}</b>}
            <div>
                <button>{carUpdate ? 'update' : 'create'}</button>
            </div>
        </form>
    );
};

export {CarForm};