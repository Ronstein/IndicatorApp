import axios from "axios";
import { API_URL as PROD_URL, API_KEY as PROD_API_KEY } from "@env";

export const API_URL = PROD_URL;
export const API_KEY = PROD_API_KEY;

const indicatorApi = axios.create({
    baseURL: API_URL,
    params: {
        apikey: API_KEY,
        formato: 'json',
    }
})


export {
    indicatorApi,
}
