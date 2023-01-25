import {useEffect, useState} from "react";
import {User} from "../User/User";
import {usersService} from "../../services";


const Users = ({setDetails, setPostsById}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
        }, []);

    return (
        <div>
            {!!users.length && users.map(user => <User key={user.id} user={user} setDetails={setDetails} setPostsById={setPostsById}/>)}
        </div>
    );
};

export {Users};