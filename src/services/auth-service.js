import API from 'src/api/api'

const authenticate = async (userName, password)=>{
    let responce = await API.post("/authenticate", {
        userName,
        password
    });
    return responce.data;
}

const saveToken = async (token)=>{
    API.defaults.headers["Authorization"] = "Bearer " + token;
}

const removeToken = async ()=>{
    API.defaults.headers["Authorization"] = "";
}

const test = async ()=>{
    let res = await API.get("/api/colectuber/viaje_chofer");
    return res.data;
}

const AuthService = {
    authenticate,
    saveToken,
    removeToken,
    test
};

export default AuthService;