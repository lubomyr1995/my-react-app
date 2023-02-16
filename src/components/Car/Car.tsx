import {FC, ReactNode} from 'react';
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

interface IProps {
    car: ICar;
    children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Grid item>
            <Card sx={{width: 275, margin: 1}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        id: {id}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Brand: {brand}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Year: {year}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => navigate(id.toString(), {state: car})} size="small">show details</Button>
                    <Button onClick={() => dispatch(carActions.setCar({car}))} size="small"
                            color="success">update</Button>
                    <Button onClick={() => dispatch(carActions.deleteById({id: id.toString()}))}
                            size="small" color="secondary">delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export {Car};