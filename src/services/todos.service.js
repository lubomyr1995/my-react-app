import {axiosService} from "./axios.service";
import {urls} from "../constants";

const todosService = {
    getAll: (page, limit) => axiosService.get(urls.todos, {
        params: {
            _start: (page-1)*limit,
            _limit: limit
        }
    })
}

export {todosService}