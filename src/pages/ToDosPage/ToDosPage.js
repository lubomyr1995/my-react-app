import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {ToDo} from "../../components";
import {useSearchParams} from "react-router-dom";

const ToDosPage = () => {
    const limit = 7
    const [toDos, setTodos] = useState([]);

    const [query, setQuery] = useSearchParams({page: 1});

    useEffect(() => {
        todosService.getAll(query.get('page'), limit).then(({data}) => setTodos([...data]))
    }, [query])

    let queryObj = Object.fromEntries(query.entries())
    const nextPage = () => {
        queryObj.page++
        setQuery(queryObj)
    }
    const prevPage = () => {
        queryObj.page--
        setQuery(queryObj)
    }

    return (
        <div>
            {toDos.map(todo => <ToDo key={todo.id} todo={todo}/>)}
            <button disabled={queryObj.page <= 1} onClick={prevPage}>prev</button>
            <button disabled={queryObj.page > Math.ceil(200 / limit) -1} onClick={nextPage}>next</button>
        </div>
    );
};

export {ToDosPage};