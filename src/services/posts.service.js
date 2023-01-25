import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getById: (id) => axiosService.get(`${urls.posts}/?userId=${id}`)
};

export {postsService};