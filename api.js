import axios from 'axios';

const Api = axios.create({
    baseURL:"https://colectuberbackenddeploy.azurewebsites.net/api/"
})
export default Api;