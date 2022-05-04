import axios from 'axios';

const Api = axios.create({
    baseURL:"https://colectuber-backend.azurewebsites.net/api/"
})
export default Api;