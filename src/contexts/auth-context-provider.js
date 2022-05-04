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
    const [chofer, setChofer] = useState(null);

    useEffect(()=>{
        //Check if logged in
        AuthService.checkLogin(fetchChofer)
            .then((chofer)=>{
                setChofer(chofer);
                setLoggedIn(true);
            })
            .catch(()=>{
                setLoggedIn(false);
            })
            .finally(()=>{
                setLoading(false);
            })
    },[]);

    const fetchChofer = async ()=>{
        let chofer = await ColectuberService.getChofer();
        console.log(chofer);
        return chofer;
    }

    const login = async (userName, password)=>{
        let chofer = await AuthService.login(userName, password, fetchChofer);
        setChofer(chofer);
        setLoggedIn(true);
    }

    const logout = async ()=>{
        setChofer(null);
        setLoggedIn(false);
    }

    return <AuthContext.Provider
        value={{
            loading,
            isLoggedIn,
            chofer,
            login,
            logout
        }}
    >
        {children}
    </AuthContext.Provider>
}