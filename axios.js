import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5174/api'
});

export default instance;
