import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const AuthRequire = ({children}) => {
    const location = useLocation();
    const {isAuth} = useSelector(state => state.auth);


    if (!isAuth) {
        return <Navigate to={'/login'} state={location}/>
    }
    return children
};

export {AuthRequire};