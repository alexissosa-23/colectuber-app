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
        AuthService.isLoggedIn()
            .then((res)=>setLoggedIn(res))
            .catch(err=>console.error(err))
            .finally(()=>setLoading(false));
    },[]);

    const login = async (userName, password)=>{
        await AuthService.login(userName, password);
        setLoggedIn(true);
    }

    const logout = async ()=>{
        await AuthService.logout();
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