import axios from 'axios';

const httpHeaders=()=>{
    axios.defaults.headers={
        Accept:"application/json",
        "Content-Type":"application/json",
    };
};
const responseInterceptors=()=>{
    axios.interceptors.response.use(response=>response.data);
}

const initialAxios=()=>{
    // if any default url or base url
    axios.defaults.baseURL="https://smile-cart-backend-staging.neetodeployapp.com/";
    responseInterceptors();
    httpHeaders();
}

export default initialAxios;