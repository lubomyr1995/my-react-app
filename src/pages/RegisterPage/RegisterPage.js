import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [errors, setErrors] = useState(null);

    const reg = async (newUser) => {
        try {
            await userService.create(newUser)
            navigate('/login')
        } catch (e) {
            setErrors(e.response.data)
        }
    }

    return (
        <div>
            {errors && <div>{JSON.stringify(errors)}</div>}
            <form onSubmit={handleSubmit(reg)}>
                <div><label>username: <input type="text" {...register('username')}/></label></div>
                <div><label>password: <input type="password" {...register('password')}/></label></div>
                <button>register</button>
            </form>
        </div>
    );
};

export {RegisterPage};