import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, IconButton } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';
import ColectuberService from 'src/services/colectuber-service';
import ActivationButton from './activation-button';
import Cargando from './cargando';


export default function  Home (){

    //Estados
    const authContext = useAuthContext();
    const [loading, setLoading] = useState(true);
    const [viaje, setViaje] = useState(null);

    // obtener viaje al inicio
    useEffect(() => {
        ColectuberService.getViaje()
            .then((viaje) => {
                setViaje(viaje)
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })
    }, []);

    const renderContet = () => {
        if (viaje) {
            return (
                <View style={styles.containerViaje}>
                    <View style={styles.contenedorViaje}>
                        <Text style={styles.containerTextViaje}>Viaje:</Text>
                        <Text style={styles.containerTextViaje2}>Conductor: {JSON.stringify(authContext.chofer.nombre)} {JSON.stringify(authContext.chofer.apellido)}</Text>
                        <Text style={styles.containerTextViaje2}>Destino: {viaje.recorrido.nombre}</Text>
                        <Text style={styles.containerTextViaje2}>Descripcion: {viaje.recorrido.descripcion}</Text>
                    </View>

                    <View style={styles.boton}>
                        <ActivationButton />
                    </View>
                </View>

            )
        } else {
            return (
                <View>
                    <View style={styles.contenedorViaje}>
                        <Text 
                        style={styles.containerTextViaje}>Viaje:</Text>
                        <Text>Conductor: </Text>
                        <Text>Destino: Sin Viaje</Text>
                        <Text>Descripcion: Sin Viaje</Text>
                    </View>

                    <Text style={styles.containerText2}>
                        Señor: {'\n'} "{authContext.chofer.nombre} {authContext.chofer.apellido} "{'\n'} usted  no posee viaje por el {'\n'} momento
                    </Text>
                </View>
            )
        }
    }
    if (!loading) {
            return(
            <View style={styles.container}>
                <View >
                    {renderContet()}
                </View>
            </View>
    )}
    else {
        return (
        <View style={styles.container}>
            <Text style={styles.containerText}>
            </Text>
            <Cargando />
        </View>
    )}

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FFFFFF',
       
        
    },
    //text
    containerText: {
        marginTop: 20,
        marginLeft: 115,
        fontSize: 27,
        
        textShadowColor: '#000000'
    },
    containerText2: {
        paddingTop: 10,
        fontSize: 20,
        textShadowColor: '#000000'
        
    },
    //titulo viaje
    containerTextViaje: {
        fontSize: 23,
        marginLeft: 3,
        color:  '#000000',
        textShadowColor: '#000000'
    },
    containerTextViaje2: {
       color:  '#000000',
    },
    //View viaje
    contenedorViaje: {
        color:'#0080C0',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        marginBottom: 25,
        borderColor:'#646464',
        borderWidth: 2,
        borderRadius:10
    },
    containerViaje: {
        marginLeft:10,
        marginRight:10,
        
        
    },
    //boton Activacion
    boton: {
        marginBottom: 25,
        marginTop: 6,
    },

});