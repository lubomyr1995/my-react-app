import {NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.bar}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/cars'}>Cars</NavLink>
            <NavLink to={'/cats'}>Cats</NavLink>
        </div>
    );
};

export {Header};