import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name} = user;
    const dispatch = useDispatch();

    return (
        <div>
            id: {id}) {name}
            <button onClick={() => dispatch(userActions.setSelectedUser(user))}>setUser</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>setUserWithApi</button>
        </div>
    );
};

export {User};