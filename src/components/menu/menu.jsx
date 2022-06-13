import React from 'react';
import { View, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AuthProvider, useAuthContext, } from 'src/contexts/auth-context-provider';

export default function Menu() {

    const authContext = useAuthContext();

    //Mensaje de confirmacion al apretar el boton de cerrar sesion
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
    //Cerrar Sesion
    const cerrarSesion = () => {
        console.log("Cerrar Sesion")
        authContext.logout()
    }

    return <View style={styles.container}>

        <TouchableOpacity
            style={styles.boton}
            onPress={() => {
                confirmAction("Colectuber-App", "Confirmar cierre de sesión!!!", cerrarSesion);
            }}
        >
            <Text
            //Boton de cierre de sesion
                style={styles.boton2}>CERRAR SESION</Text>

        </TouchableOpacity>
    </View>

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    //Estilo para el boton de iniciar sesion...
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
        backgroundColor: '#3F5292',
        width: 200,
        height: 45,
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        borderRadius: 20,
        paddingTop: 10,
    },
})