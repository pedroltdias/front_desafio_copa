import axios, { AxiosInstance } from "axios"

const API_URL = "http://localhost:3000/"

const httpClient: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
})

export default httpClient