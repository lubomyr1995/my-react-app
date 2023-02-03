import {useAppReducer} from "../../hooks";
import {User} from "../User/User";


const Users = () => {
    const [state, dispatch] = useAppReducer(reducers => reducers.usersReducer);
    return (
        <div>
            {state.users && state.users.map(user => <User key={user.id} user={user} dispatch={dispatch}/>)}
        </div>
    );
};

export {Users};