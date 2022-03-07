import axios from 'axios'
import jwt_decode from "jwt-decode";


const baseURL = 'http://127.0.0.1:8000/api/'


let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

export const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(async req => {
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        if (authTokens){req.headers.Authorization = `Bearer ${authTokens?.access}`
    }
    
    return req
})
