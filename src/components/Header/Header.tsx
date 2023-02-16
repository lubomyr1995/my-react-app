import {FC} from 'react';
import {AppBar, Button, Divider, Stack, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Header: FC = () => {
    const navigate = useNavigate();
    return (
        <AppBar position={"static"}>
            <Toolbar>
                <DirectionsCarIcon/>
                <Typography variant="h6" component="div" sx={{marginRight: 20}}>
                    CarAPI
                </Typography>
                <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                    <Button onClick={() => navigate('/home')} color={'inherit'}>Home</Button>
                    <Button onClick={() => navigate('/cars')} color={'inherit'}>Cars</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export {Header};