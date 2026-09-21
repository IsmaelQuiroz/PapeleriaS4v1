//import { LaptopWindows } from '@material-ui/icons';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

// #region azios interceptors request and response for token
// axios.interceptors.request.use( (config) => {
//     const security_token = window.localStorage.getItem('token');

//     if(security_token){
//         config.headers.Authorization = 'Bearer' + security_token;
//         return config;
//     }
//     else if(security_token === null){
//         //return console.log("El token es nulo");
//        return Promise.reject("token nulo");
        
//     }
// }, error => {
//      console.error("Error: Falta el token de autenticación o ha expirado");
//     return Promise.reject(error);
    
// });

// axios.interceptors.response.use(
//     (response) => {
//         console.log("este response", response);
//         return response;
//     },
//     (error) => {
//             if(error.response){
//                 const{status, data} = error.response;
//                 console.log("status:", status, "error:", data);
//                 // if(status === 401){
//                 //     console.error("Error: Falta el token de autenticación o ha expirado");

//                 //     localStorage.removeItem('token');
//                 //     window.location.href='/';
//                 // }
//             }
//     }
// )

// #endregion

//Generic OPS
const genericRequest = {
    get: (url) => axios.get(url),
    post: (url,body) => axios.post(url,body),
    put: (url,body) => axios.put(url,body),
    delete: (url) => axios.delete(url)
}

export default genericRequest;