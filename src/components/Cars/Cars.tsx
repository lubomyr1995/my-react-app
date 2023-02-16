import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "../Car/Car";
import {carActions} from "../../redux";
import {Grid} from "@mui/material";


const Cars: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <Grid container spacing={2} columns={{xs: 1, sm: 2, md: 3}} justifyContent="space-around">
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </Grid>
    );
};

export {Cars};