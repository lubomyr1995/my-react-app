import {FC} from 'react';
import {CarForm, Cars} from "../../components";
import {Outlet} from "react-router-dom";

const CarsPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <div><Outlet/></div>
            <br/>
            <Cars/>
        </div>
    );
};

export {CarsPage};