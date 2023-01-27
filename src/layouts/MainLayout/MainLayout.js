import {LeftBar} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <LeftBar/>
            <div style={{background: "#d5ee97", width:"100%"}}><Outlet/></div>
        </div>
    );
};

export {MainLayout};