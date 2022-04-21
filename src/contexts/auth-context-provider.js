import React,{ useState, useEffect, useContext } from 'react';
import AuthService from 'src/services/auth-service';
import ColectuberService from 'src/services/colectuber-service';

const AuthContext = React.createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [viaje, setViaje] = useState(null);

    useEffect(()=>{
        //Check if logged in
        AuthService.checkLogin(fetchViaje)
            .then((viaje)=>{
                setViaje(viaje);
                setLoggedIn(true);
            })
            .catch(()=>{
                setLoggedIn(false);
            })
            .finally(()=>{
                setLoading(false);
            })
    },[]);

    const fetchViaje = async ()=>{
        let viaje = await ColectuberService.getViaje();
        console.log(viaje);
        return viaje;
    }

    const login = async (userName, password)=>{
        let viaje = await AuthService.login(userName, password, fetchViaje);
        setViaje(viaje);
        setLoggedIn(true);
    }

    const logout = async ()=>{
        setViaje(null);
        setLoggedIn(false);
    }

    return <AuthContext.Provider
        value={{
            loading,
            isLoggedIn,
            viaje,
            login,
            logout
        }}
    >
        {children}
    </AuthContext.Provider>
}