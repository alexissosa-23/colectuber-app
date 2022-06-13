import React from 'react';
import { View, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AuthProvider, useAuthContext, } from 'src/contexts/auth-context-provider';


export default function Menu() {

    const authContext = useAuthContext();

    //Mensaje de confirmacion al apretar el boton de cerrar secion
    const confirmAction = (title, message, action) => {
        Alert.alert(title, message, [
            {
                text: 'No',
                onPress: () => { },
                style: 'No'
            },
            {
                text: 'Si',
                onPress: action,
            }
        ])
    }
    const cerrarSesion = () => {
        console.log("Cerrar Sesion")
        authContext.logout()
    }

    return <View style={styles.container}>
        <View style={styles.containerDescripcion}>
            <Text style={styles.containerTextTitulo}>MENU</Text>
            <Text style={styles.containerText}>Nombre de la Aplicación:</Text>

            <View style={styles.contenedorDescrip}>
                <Text style={styles.containerTextCuerpo}>ColectuberApp</Text>
            </View>
            <Text style={styles.containerText}>Objetivo:</Text>
            <View style={styles.contenedorDescrip}>
                <Text style={styles.containerTextCuerpo}>Permitir al conductor del colectivo brindar su ubicación, para poder lograr verse en la "Pagina Web" en tiempo real la localización del colectivo</Text>
            </View>
            <Text style={styles.containerText}>Equipo de desarrollo:</Text>
            <View style={styles.contenedorDescrip}>
                <Text style={styles.containerTextCuerpo}>Alexis Sosa, José Sosa, Adrián Di Menna, Fabio Kita, Daniel Matsuura, Enzo Ramirez</Text>
            </View>

        </View>
        <View style={styles.boton3}>
        <TouchableOpacity
                style={styles.boton}
                onPress={() => {
                    confirmAction("Colectuber-App", "Confirmar cierre de sesión!!!", cerrarSesion);
                }}
            >
                <Text
                    style={styles.boton2}>CERRAR SESION</Text>

            </TouchableOpacity>
        </View>
    </View>




}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',

    },
    containerText: {
        marginTop: 20,
        marginLeft: 115,
        fontSize: 27,
        textShadowColor: '#000000',

    },
    containerText2: {
        paddingTop: 10,
        fontSize: 20,
        textShadowColor: '#000000',

    },
    containerText: {
        fontSize: 18,
        marginLeft: 5,
        color: '#000000',
        textShadowColor: '#000000',
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 2,

    },
    //container para el cuerpo del campo (la descripcion)
    containerTextCuerpo: {
        color: '#000000',
        marginRight: 0,
        marginBottom: 0,
        fontSize: 15,
    },
    containerTextTitulo: {
        color: '#000000',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",

    },
    //View de la descripcion
    contenedorDescrip: {
        color: '#0080c0',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 25,
        borderColor: '#646464',
        borderWidth: 3,
        borderRadius: 10,
    },
    //contenedor de todo el texto
    containerDescripcion: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,

    },
    boton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        backgroundColor: 'rgb(254, 97, 37)',
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
        backgroundColor: '#3F5292',//2BB69C
        width: 200,
        height: 45,
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        borderRadius: 20,
        paddingTop: 10,


    },
    boton3: {
        marginBottom: 25,
        marginTop: 6,
        alignItems: 'center',
    },
})