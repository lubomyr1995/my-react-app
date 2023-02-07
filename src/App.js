import {CarForm, Cars} from "./components";
import {useSelector} from "react-redux";

const App = () => {
    const {status} = useSelector(state => state.cars);
    return (
        <div>
            <CarForm/>
            <hr/>
            {status === 'loading' && <h1>Loding.......</h1>}
            <Cars/>
        </div>
    );
};

export {App};