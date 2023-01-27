import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {ToDo} from "../../components";

const ToDosPage = () => {
    const [toDos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos([...data]))
    }, [])

    return (
        <div>
            {toDos.map(todo => <ToDo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {ToDosPage};