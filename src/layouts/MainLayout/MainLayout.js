import {Header} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div style={{padding: '10px'}}><Outlet/></div>
        </div>
    );
};

export {MainLayout};