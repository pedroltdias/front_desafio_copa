import axios, { AxiosInstance } from "axios"

const API_URL = "http://localhost:3000/api/v1/"

const http: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
})

export default http