import {urls} from "../constants";
import {apiService} from "./api.service";

const carService = {
    getAll: (page = 1) => apiService.get(urls.cars, {params: {page}}),
    create: (car) => apiService.post(urls.cars, car),
    delById: (id) => apiService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => apiService.put(`${urls.cars}/${id}`, car)
}

export {carService};