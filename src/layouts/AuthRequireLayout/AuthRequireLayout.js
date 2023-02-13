import {Outlet, useNavigate} from "react-router-dom";
import {authService} from "../../services";
import {useEffect} from "react";

const AuthRequireLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!!!authService.getAccessToken()) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <div>
            <h1>AuthRequireLayout</h1>
            <Outlet/>
        </div>
    );
};

export {AuthRequireLayout};