import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {actionsToDispatch} from "../../constants";
import {useEffect} from "react";

const UsersForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();
    const [state, dispatch] = useAppReducer(reducers => reducers.usersReducer);

    useEffect(() => {
        if (state.user) {
            const {name, surname, age} = state.user
            setValue('name', name)
            setValue('surname', surname)
            setValue('age', age)
        }
    }, [state, setValue])

    const add = (user) => {
        if (state.user) {
            dispatch(actionsToDispatch.UPDATE(state.user.id, user))
        } else {
            dispatch(actionsToDispatch.ADD(user))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(add)}>
            <input style={{marginRight: '10px'}} type="text" placeholder={'name'} {...register('name')}/>
            <input style={{marginRight: '10px'}} type="text" placeholder={'surname'} {...register('surname')}/>
            <input style={{marginRight: '10px'}} type="text"
                   placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button>{state.user ? 'update' : 'create'}</button>
        </form>
    );
};

export {UsersForm};