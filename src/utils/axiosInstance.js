import axios from 'axios'
import promise from 'promise';



const baseURL = 'http://127.0.0.1:8000/api/'


 let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

export const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use( function(req) {
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        if (authTokens){
        req.headers.Authorization = `Bearer ${authTokens?.access}`
        }
    console.log('inceptor work')
    return req
} , 
function (error) {
    // Do something with request error 
    return promise.reject(error); 
}
)
