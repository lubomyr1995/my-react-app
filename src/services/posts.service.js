import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getByPostId: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postsService}