import {NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.bar}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};