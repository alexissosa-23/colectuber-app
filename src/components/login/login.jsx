import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';

const Login = () => {
    const authContext = useAuthContext();

    const login = () => {
        authContext.login("antonio@gmail.com", "muysecreto")
            .catch((err) => {
                console.error(err);
            });
    }

    return <View>
        <Text>
            Login
        </Text>
        <Button title='Log in' onPress={login} />
    </View>
}

export default Login;