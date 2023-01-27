import {NavLink} from "react-router-dom";

import css from './LeftBar.module.css';

const LeftBar = () => {
    return (
        <div className={css.bar}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/todos'}>ToDos</NavLink>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {LeftBar};