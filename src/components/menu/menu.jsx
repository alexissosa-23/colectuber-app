import React from 'react';
import { View, Button,Alert,StyleSheet } from 'react-native';
import { AuthProvider,useAuthContext } from 'src/contexts/auth-context-provider';


export default function  Menu (){

    const authContext = useAuthContext();

     //Mensaje de confirmacion al apretar el boton de cerrar secion
     const confirmAction = (title,  message, action)=>{
        Alert.alert(title, message, [
            {
                text:'No',
                onPress:()=>{},
                style:'No'
            },
            {
                text: 'Si',
                onPress: action,
            }
        ])
    }
    const cerrarSesion = () =>{
        console.log("Cerrar Sesion")
        authContext.logout()
    }

    return <View style={styles.container} >
            <Button
            color='#ff7f27'
            title='Cerrar Sesión'
            onPress={()=>{
                confirmAction("Colectuber-App", "Desea Cerrar Sesión",cerrarSesion );
            }}/>
        </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',

    }
})