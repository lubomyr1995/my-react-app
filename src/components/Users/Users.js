import {useAppReducer} from "../../hooks";
import {User} from "../User/User";

const Users = () => {
    const [users, dispatch] = useAppReducer((reducers) => reducers.userReducer);

    return (
        <div>
            {users && users.map(user => <User key={user.id} user={user} dispatch={dispatch}/>)}
        </div>
    );
};

export {Users};