import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {Comment} from "../../components";
import {Outlet} from "react-router-dom";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <Outlet/>
            <div className={css.wrap}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {CommentsPage};