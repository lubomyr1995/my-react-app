import {useRef} from "react";
import {useAuthContext} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const authUser = useRef();

    const context = useAuthContext();
    const {logIn} = context;
    const {state} = useLocation();
    // console.log(state.pathname)
    const navigate = useNavigate();

    const login = () => {
        // console.log(authUser.current.value)
        logIn(authUser.current.value)
        navigate(state.pathname, {replace: true})
    }

    return (
        <div>
            <input type="text" placeholder={'username'} ref={authUser}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {LoginPage};