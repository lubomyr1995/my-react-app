import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const {users, status} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch])
    return (
        <div>
            <h1>{status && <div>LOADING...............................</div>}</h1>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};