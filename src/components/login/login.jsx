import React, { useState } from 'react';

import { useAuthContext } from 'src/contexts/auth-context-provider';

import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import LogoInicioSesion from './LogoInicioSesion.jsx';

const Login = () => {
    const authContext = useAuthContext();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [ready, setReady] = useState(true);


    const login = () => {
        if (!name || !pass) {
            return
        }
        setReady(false)
        authContext.login(name, pass)
            .catch(err => {
                console.error(err);
                //Contrasena o username equivocado o error al autenticar
                setReady(true);
            })
    }

    return (

        <View style={styles.container}>

            <Text style={styles.bordeSuperior}> BordeSuperior</Text>
            <Text style={styles.titulo}> Colectúber</Text>

            <TextInput
                style={{ flex: 1, borderBottomColor: '#000000', borderBottomWidth: 1, }}
                value={name}
                placeholder={'Usuario o Correo Electronico '}
                onChangeText={newName => setName(newName)}
            />


            <TextInput
                style={{ flex: 1, borderBottomColor: '#000000', borderBottomWidth: 1, }}
                value={pass}
                placeholder={'Contraseña'}
                secureTextEntry={true}
                onChangeText={newPass => setPass(newPass)}
            />

            <Button
                disabled={!ready}
                style={{ flex: 1, height: 45, width: 200, }}
                backgroundColor='rgb(255, 127, 39)'
                color='rgb(255, 127, 39)'
                borderColor='rgb(255, 127, 39)'
                borderBottomColor='rgb(0, 127, 39)'
                onPress={login}
                title='INICIAR SESION'

            />


        </View>

    )


}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        alignItems: 'center',

    },

    bordeSuperior: {
        flexDirection: "column",
        backgroundColor: '#000000',
        flex: 1,
       
    },
    titulo: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 1,
        fontSize: 40,
        alignItems: 'center',
    },

    input: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',


    },

    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 127, 39)',
        color: 'rgb(0, 0, 0)',
        textAlign: 'center',
        borderRadius: 20,
        borderColor: 'rgb(255, 127, 39)',
        fontSize: 15,

    },


});


export default Login;
