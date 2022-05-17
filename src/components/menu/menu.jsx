import React from 'react';
import { View, Button } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';


export default function  Menu (){

    const authContext = useAuthContext();


    return <View >
            <Button 
            color='##FF7F27'
            title='Cerrar Sesión' onPress={authContext.logout} />
        </View>
}