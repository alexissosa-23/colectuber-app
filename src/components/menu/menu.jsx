import React from 'react';
import { View, Button } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';


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

    return <View >
            <Button
            color='#ff7f27'
            title='Cerrar Sesión'
            onPress={authContext.logout} />
        </View>
}