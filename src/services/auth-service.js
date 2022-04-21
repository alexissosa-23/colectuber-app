import API from 'src/api/api'
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY_NAME = "COLECTUBER_APP_TOKEN_KEY";

const authenticate = async (userName, password) => {
    let responce = await API.post("/authenticate", {
        userName,
        password
    });
    
    console.log(responce.data);

    return responce.data;
}

const setToken = async (token) => {
    API.defaults.headers["Authorization"] = "Bearer " + token;
    let isAvailable = await SecureStore.isAvailableAsync();
    if (isAvailable) await SecureStore.setItemAsync(TOKEN_KEY_NAME, token);
}

const removeToken = async () => {
    API.defaults.headers["Authorization"] = "";
    let isAvailable = await SecureStore.isAvailableAsync();
    if (isAvailable) await SecureStore.deleteItemAsync(TOKEN_KEY_NAME);
}

const getToken = async () => {
    let token = await SecureStore.getItemAsync(TOKEN_KEY_NAME);
    if (token) return token;
    return "";
}

const loginWithData = async (token, asyncFetchData = null) => {
    await setToken(token);

    let data = null;
    if (asyncFetchData) {
        try {
            data = await asyncFetchData();
        } catch (error) {
            await removeToken();
            throw error;
        }
    }

    return data;
}

const login = async (userName, password, asyncFetchData = null) => {
    let token = await authenticate(userName, password);
    let data = await loginWithData(token, asyncFetchData);
    return data;
}

const logout = async () => {
    await removeToken();
}

const checkLogin = async (asyncFetchData = null) => {
    let token = await getToken();
    let data = await loginWithData(token, asyncFetchData);
    return data;
}

const AuthService = {
    login,
    logout,
    checkLogin
};

export default AuthService;