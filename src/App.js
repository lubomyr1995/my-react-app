import {Users} from "./components/Users/Users";
import {useState} from "react";
import {Details} from "./components/Details/Details";
import {Posts} from "./components/Posts/Posts";


const App = () => {
    let [details, setDetails] = useState(null);
    const [postsById, setPostsById] = useState(null);
    return (
        <div>
            <div>{details && <Details details={details} onHide={setDetails} onShowPosts={setPostsById}/>}</div>
            <br/>
            {postsById && (<Posts postsById={postsById}/>)}
            <hr/>
            <Users setDetails={setDetails}/>
        </div>
    );
};

export {App};