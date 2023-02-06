import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {catsActions} from "../redux";

const CatsForm = () => {
    const {cat} = useSelector(({cats}) => cats);
    const dispatch = useDispatch();

    const refName = useRef();

    useEffect(() => {
        if (cat) {
            refName.current.value = cat.name
        }
    }, [cat])

    const add = () => {
        if (cat) {
            dispatch(catsActions.update({id: cat.id, name: refName.current.value}))
        } else {
            dispatch(catsActions.add({name: refName.current.value}))
        }
        refName.current.value = ''
    }

    return (
        <div>
            <input type="text" placeholder={'name'} ref={refName}/>
            <button onClick={add} >{cat ? 'update' : 'add'}</button>
        </div>
    );
};

export {CatsForm};