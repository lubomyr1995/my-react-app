import {NavLink, useNavigate} from "react-router-dom";

import css from './LeftBar.module.css';
import {useAuthContext} from "../../hooks";
import {Button} from "../Button/Button";

const LeftBar = () => {
    const {user, logOut} = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className={css.bar}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/todos'}>ToDos</NavLink>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            {user && <div>
                user <Button click={()=> {
                logOut()
                navigate('/home')
            }}>exit</Button>
            </div>}
        </div>
    );
};

export {LeftBar};