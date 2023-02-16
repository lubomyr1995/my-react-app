import {FC, useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks/routerHooks";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {useNavigate, useParams} from "react-router-dom";
import {Alert} from "@mui/material";

interface IProps {

}

const CarDetails: FC<IProps> = () => {
    const {state} = useAppLocation<ICar>();
    const [car, setCar] = useState<ICar | null>(null);
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(id!).then(({data}) => setCar(data))
        }
    }, [id, state])

    return (
        <Alert onClick={()=> navigate('/cars')}>
            {car && <div>{JSON.stringify(car)}</div>}
        </Alert>
    );
};

export {CarDetails};