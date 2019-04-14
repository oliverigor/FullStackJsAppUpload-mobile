import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend.herokuapp.com', // minha api node: 'https://omnistack6-0.herokuapp.com'
});

export default api;