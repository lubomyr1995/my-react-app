import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Header = () => {
    const {isAuth} = useSelector(state => state.auth);

    useEffect(() => {
    }, [isAuth])

    return (
        <div className={css.bar}>
            <NavLink to={'/home'}>HOME</NavLink>
            <NavLink to={'/cars'}>CARS</NavLink>
            {isAuth ? <div>hello</div> : <div className={css.bar}>
                <NavLink to={'/login'}>login</NavLink>
                <NavLink to={'/register'}>register</NavLink>
            </div>}
        </div>
    );
};

export {Header};