import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {actionsToDispatch} from "../../constants";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, setValue, reset} = useForm();
    const [state, dispatch] = useAppReducer(reducers => reducers.carsReducer);

    useEffect(() => {
        if (state.car) {
            const {brand, price, year} = state.car;
            setValue('brand', brand)
            setValue('price', price)
            setValue('year', year)
        }
    }, [state, setValue])

    const add = (car) => {
        if (state.car) {
            dispatch(actionsToDispatch.UPDATE(state.car.id, car))
        } else {
            dispatch(actionsToDispatch.ADD(car))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(add)}>
            <div><label htmlFor="name">Brand: <input type="text" {...register('brand')}/></label></div>
            <div><label htmlFor="price">Price: <input type="number" {...register('price')}/></label></div>
            <div><label htmlFor="year">Year: <input type="number" {...register('year')}/></label></div>
            <button>{state.car ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};