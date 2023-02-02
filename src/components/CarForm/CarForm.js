import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {actionsToDispatch} from "../../constants";

const CarForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const [, dispatch] = useAppReducer(reducers => reducers.carReducer);
    const add = (myCar) => {
        dispatch(actionsToDispatch.ADD(myCar))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(add)}>
            <div><label htmlFor="name">Brand: <input type="text" {...register('brand')}/></label></div>
            <div><label htmlFor="price">Price: <input type="number" {...register('price')}/></label></div>
            <div><label htmlFor="year">Year: <input type="number" {...register('year')}/></label></div>
            <button>save</button>
        </form>
    );
};

export {CarForm};