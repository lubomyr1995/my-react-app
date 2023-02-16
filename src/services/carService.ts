import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars),
    getById: (id: string): IRes<ICar> => apiService.get(`${urls.cars}/${id}`),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.cars, car),
    deleteById: (id: string): IRes<void> => apiService.delete(`${urls.cars}/${id}`),
    updateById: (id: string, car: ICar): IRes<ICar> => apiService.put(`${urls.cars}/${id}`, car)
}

export {carService}