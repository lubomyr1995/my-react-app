import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";


const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {state} = useLocation();
    const navigate = useNavigate();
    const [query] = useSearchParams();

    if (query.get('expSession')) {
        dispatch(authActions.setAuthF())
    }


    const {loginErrors} = useSelector(state => state.auth);

    const login = async (userCredential) => {
        await dispatch(authActions.login({userCredential}))
        navigate(state?.pathname || '/', {replace: true})
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <div><label>Username: <input type="text" {...register('username')}/></label></div>
                <div><label>Password: <input type="text" {...register('password')}/></label></div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            {loginErrors?.detail && <div>{loginErrors?.detail}</div>}
        </div>

    );
};

export {LoginPage};