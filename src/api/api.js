import axios from "axios";

const API = axios.create({
    baseURL:"https://colectuber-backend.azurewebsites.net"
});

export default API;