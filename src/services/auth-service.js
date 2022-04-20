import API from 'src/api/api'
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY_NAME = "COLECTUBER_APP_TOKEN_KEY";

const authenticate = async (userName, password)=>{
    let responce = await API.post("/authenticate", {
        userName,
        password
    });
    return responce.data;
}

const setToken = async (token)=>{
    API.defaults.headers["Authorization"] = "Bearer " + token;
    let isAvailable = await SecureStore.isAvailableAsync();
    if(isAvailable) await SecureStore.setItemAsync(TOKEN_KEY_NAME, token);
}

const removeToken = async ()=>{
    API.defaults.headers["Authorization"] = "";
    let isAvailable = await SecureStore.isAvailableAsync();
    if(isAvailable) await SecureStore.deleteItemAsync(TOKEN_KEY_NAME);
}

const getToken = async ()=>{
    let token = await SecureStore.getItemAsync(TOKEN_KEY_NAME);
    if(token) return token;

    let auth = API.defaults.headers["Authorization"];
    if(auth) return auth.substring(7);

    return null;
}

const login = async (userName, password)=>{
    let token = await authenticate(userName, password);
    await setToken(token);
}

const logout = async ()=>{
    await removeToken();
}

const isLoggedIn = async ()=>{
    let token = await getToken();
    if(token) return true;
    return false;
}

const AuthService = {
    login,
    logout,
    isLoggedIn
};

export default AuthService;