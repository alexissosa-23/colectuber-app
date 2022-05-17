import React, { useState } from 'react';
import { useAuthContext } from 'src/contexts/auth-context-provider';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';


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
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.titulo}
            >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={require("src/components/login/icons//titulo.png")}
                />

            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.logo}
            >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={require("src/components/login/icons//logo.png")}
                />
            </TouchableOpacity>

            <TextInput style={styles.input}
                value={name}
                placeholder={'Usuario o Correo Electronico '}
                onChangeText={newName => setName(newName)}
            />

            <Text style={styles.bordeInput}></Text>

            <TextInput style={styles.input}
                value={pass}
                placeholder={'Contraseña'}
                secureTextEntry={true}
                onChangeText={newPass => setPass(newPass)}
            />

            <Text style={styles.bordeInput}></Text>


            <TouchableOpacity
                style={styles.boton}
                disabled={!ready}
                onPress={login}
            >
                <Text style={styles.boton2}>INICIAR SESION</Text>

            </TouchableOpacity>

            <Text style={styles.bordeInferior}></Text>

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
        width: 400,

    },
    titulo: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        width: 300,
    },

    //logo imagen contenedor
    logo: {
        flex: 3,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
    },

    image: {
        flex: 1
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
        backgroundColor: 'rgb(255, 127, 39)',
        width: 200,
        //flex: 0.6,
        height: 45,
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        borderRadius: 20,


    },
    boton2: {
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        backgroundColor: 'rgb(255, 127, 39)',
        width: 200,
        //flex: 0.6,
        height: 45,
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        borderRadius: 20,
        paddingTop: 10,


    },
    bordeInferior: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 2,

    },
    bordeInput: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 0.5,

    },

});


export default Login;




