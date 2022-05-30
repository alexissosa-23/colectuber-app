import React, { useState } from 'react';
import { useAuthContext } from 'src/contexts/auth-context-provider';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Login = () => {

    //Estados
    const authContext = useAuthContext();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [ready, setReady] = useState(true);

    //Mensaje de errores al autenticarse
    function mensajeError(title,  message, action){
        Alert.alert(title, message, [
            {
                text: 'Ok',
                onPress: action,
            }
        ])
    }
    //Action en caso de error al auntenticarse
    const actionError = () =>{
        return
    }
    //Verificacion usuario y contraseña...
    const login = () => {
        if (!name && !pass) {
            mensajeError("Error","Los campos Usuario y contraseña estan vacías",actionError)
        }else if (!name) {
            mensajeError("Error","El campo Usuario estan vacía",actionError)
        }
        else if (!pass) {
            mensajeError("Error","El Campo contraseña estan vacía",actionError)
        }
        setReady(false)
        authContext.login(name, pass)
            .catch(err => {
                 //Contraseña o username equivocado o error al autenticar...
                 mensajeError("Error","Contraseña o usuario incorrecto",actionError);
                setReady(true);
            })
    }
    return (
         //Borde Superior..
        <View style={styles.container}>
            <Text style={styles.bordeSuperior}> BordeSuperior</Text>
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.titulo}
            >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                  //Titulo Colectuber...
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
                    //Logo Colectuber...
                    source={require("src/components/login/icons//logo.png")}
                />
            </TouchableOpacity>

            <TextInput style={styles.input}
                //Input para el Correo...
                value={name}
                placeholder={'Usuario o Correo Electronico '}
                onChangeText={newName => setName(newName)}
            />

            <Text
            //Separador para los inputs...
            style={styles.bordeInput}></Text>

            <TextInput style={styles.input}
            //Input para la contraseña...
                value={pass}
                placeholder={'Contraseña'}
                secureTextEntry={true}
                onChangeText={newPass => setPass(newPass)}
            />

            <Text
            //Separador para los inputs...
            style={styles.bordeInput}></Text>


            <TouchableOpacity
               //Contenedor para el boton de inciar sesion...
                style={styles.boton}
                disabled={!ready}
                onPress={login}
            >
                <Text
                //Boton de iniciar sesion...
                style={styles.boton2}>INICIAR SESION</Text>

            </TouchableOpacity>

            <Text
            //Borde inferior para que se ajuste mejor la pantalla usando flex...
            style={styles.bordeInferior}></Text>

        </View>
    )

}

const styles = StyleSheet.create({
    // Estilo del contenedor global del Login...
    container: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        alignContent: 'space-between',

    },
    //Estilo del borde superior...
    bordeSuperior: {
        justifyContent: 'space-around',
        flexDirection: "column",
        backgroundColor: '#000000',
        flex: 1,
        width: 400,

    },
    //Estilo del titulo Colectuber...
    titulo: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        width: 300,
    },

    //Estilos del logo de Colectuber...
    logo: {
        flex: 3,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
    },

    //Estilo para las imagenes...
    image: {
        flex: 1
    },

    //Estilo para los inputs user y correo...
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
    //Estilo para el contenedor del boton de iniciar sesion...
    boton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        backgroundColor: 'rgb(255, 127, 39)',
        width: 200,
        height: 45,
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        borderRadius: 20,
    },

     //Estilo para el boton de iniciar sesion...
    boton2: {
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        backgroundColor: 'rgb(255, 127, 39)',
        width: 200,
        height: 45,
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        borderRadius: 20,
        paddingTop: 10,


    },
    //Estilo del borde inferior...
    bordeInferior: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 2,

    },
    //Estilo para los bordes que estan en medio de los inputs...
    bordeInput: {
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 0.5,

    },

});

export default Login;




