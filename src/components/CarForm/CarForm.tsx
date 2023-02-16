import {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import {Button, Container, TextField} from "@mui/material";

const CarForm: FC = () => {
    const {register, reset, setValue, handleSubmit} = useForm<ICar>();

    const dispatch = useAppDispatch();
    const {updatedCar} = useAppSelector(state => state.carReducer);

    useEffect(() => {
        if (updatedCar) {
            setValue('brand', updatedCar.brand)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)
        }
    }, [updatedCar, setValue])

    const submit: SubmitHandler<ICar> = (car) => {
        if (updatedCar) {
            dispatch(carActions.updateById({id: updatedCar.id.toString(), car}))
        } else {
            dispatch(carActions.create({car}))
        }
        reset()
    }

    return (
        <Container style={{height: "80px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
            <form onSubmit={handleSubmit(submit)} style={{margin: "10px", gap: "10px"}}>
                <TextField sx={{marginRight: 1}} id="outlined-basic" label="Brand"
                           variant="filled" {...register('brand')}/>
                <TextField sx={{marginRight: 1}} id="outlined-basic" label="Price"
                           variant="filled" {...register('price', {valueAsNumber: true})}/>
                <TextField sx={{marginRight: 1}} id="outlined-basic" label="Year"
                           variant="filled" {...register('year', {valueAsNumber: true})}/>
                <button>{updatedCar ? 'update' : 'create'}</button>
                <Button variant="contained" color="success">{updatedCar ? 'update' : 'create'}</Button>
            </form>
        </Container>
    );
};

export {CarForm};