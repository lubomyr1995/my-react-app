import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {actionsToDispatch} from "../../constants";

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const [, dispatch] = useAppReducer(reducers => reducers.userReducer);
    const add = (user) => {
        dispatch(actionsToDispatch.ADD(user))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(add)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'surname'} {...register('surname')}/>
            <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button>create</button>
        </form>
    );
};

export {UserForm};