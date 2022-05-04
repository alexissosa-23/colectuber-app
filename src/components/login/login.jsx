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

            <TextInput style={styles.input}
                value={name}
                placeholder={'Usuario o Correo Electronico '}
                onChangeText={newName => setName(newName)}
            />


            <TextInput style={styles.input}
                value={pass}
                placeholder={'Contraseña'}
                secureTextEntry={true}
                onChangeText={newPass => setPass(newPass)}
            />
            <View style={styles.boton}>
            <Button
                color='rgb(255, 127, 39)'
                disabled={!ready}
                onPress={login}
                title='INICIAR SESION'

            />
            </View>
            <Text style={styles.bordeInferior}> BordeInferior</Text>

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
        alignContent: 'space-between',

    },

    bordeSuperior: {
        justifyContent: 'space-around',
        flexDirection: "column",
        backgroundColor: '#000000',
        flex: 1,
        width: 300,

    },
    titulo: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 3,
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    input: {
        flexDirection: "column",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        width: 300,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontSize: 16,

    },

    boton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 15,
        flex: 1,
        height: 45,
        width: 200,

    },
    bordeInferior: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 2,

    },

});


export default Login;
