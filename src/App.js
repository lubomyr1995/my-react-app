import {Header} from "./components/Header/Header";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

const App = () => {
    return (
        <div>
            <Header/>
            <br/>
            <Users/>
            <hr/>
            <hr/>
            <Posts/>
        </div>
    );
};

export {App};