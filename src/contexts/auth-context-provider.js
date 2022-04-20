import React,{ useState, useEffect, useContext } from 'react';
import AuthService from 'src/services/auth-service';

const AuthContext = React.createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        //Conseguir token del storage si existe
        setLoading(false);
    },[]);

    const login = async (userName, password)=>{
        let token = await AuthService.authenticate(userName, password);
        await AuthService.saveToken(token);
        setLoggedIn(true);
    }

    const logout = async()=>{
        await AuthService.removeToken();
        setLoggedIn(false);
    }

    return <AuthContext.Provider
        value={{
            loading,
            isLoggedIn,
            login,
            logout
        }}
    >
        {children}
    </AuthContext.Provider>
}