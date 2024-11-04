import axios from 'axios';

const api = axios.create({
   // baseURL: 'http://192.168.15.149:3333' // IP CASA PAI
    baseURL: 'http://172.17.1.108:3333' // IP ESTACIO
});

export default api;