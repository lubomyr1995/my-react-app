import axios from "axios";
import baseURL from "../constants/urls";

let axiosService = axios.create({baseURL, headers: {}});

export {axiosService};