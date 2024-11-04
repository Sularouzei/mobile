import axios from 'axios';

const api = axios.create({
   // baseURL: 'http://192.168.15.149:3333' // IP CASA PAI
    baseURL: 'http://192.168.15.149:3333' // IP ESTACIO
});

export default api;