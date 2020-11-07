import axios from 'axios';
const baseURL = "http://localhost:3000/";

const axiosInstance = axios.create({
    baseURL
})

// axiosInstance.defaults.withCredentials = true;

// axiosInstance.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem("austin_token");
//         console.log(token);
//         if(token){
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     err => Promise.reject(err)
// )

export const apiHelper = axiosInstance;