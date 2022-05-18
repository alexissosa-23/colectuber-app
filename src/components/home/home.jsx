import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, IconButton } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';
import ColectuberService from 'src/services/colectuber-service';
import ActivationButton from './activation-button';
import Cargando from './cargando';


export default function Home() {

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
                    <Text style={styles.containerTextViaje3}>Informacion Viaje</Text>
                    <Text style={styles.containerTextViaje}>Conductor:</Text>
                   
                    <View style={styles.contenedorViaje}>
                        <Text style={styles.containerTextViaje2}>{JSON.stringify(authContext.chofer.nombre)} {JSON.stringify(authContext.chofer.apellido)}</Text>
                    </View>
                    <Text style={styles.containerTextViaje}>Destino:</Text>
                    <View style={styles.contenedorViaje}>
                        <Text style={styles.containerTextViaje2}>{viaje.recorrido.nombre}</Text>
                    </View>
                    <Text style={styles.containerTextViaje}>Descripcion:</Text>
                    <View style={styles.contenedorViaje}>
                       <Text style={styles.containerTextViaje2}>{viaje.recorrido.descripcion}</Text>
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
                        <Text style={styles.containerTextViaje}>Viaje:</Text>
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
        return (
            <View style={styles.container}>
                <View >
                    {renderContet()}
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>
                </Text>
                <Cargando />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    //text
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
    //titulo viaje
    containerTextViaje: {
        fontSize: 18,
        marginLeft: 15,
        color: '#000000',
        textShadowColor: '#000000',
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 2,


    },
    containerTextViaje2: {
        color: '#000000',
        marginRight: 0,
        marginBottom: 0,
        fontSize: 15,
    },
    containerTextViaje3: {
        color: '#000000',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        
    },
    //View viaje
    contenedorViaje: {
        color: '#0080c0',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 25,
        borderColor: '#646464',
        borderWidth: 2,
        borderRadius: 10,
    },
    containerViaje: {
        marginLeft: 10,
        marginRight: 10,
        


    },

    //boton Activacion
    boton: {
        marginBottom: 25,
        marginTop: 6,
    },
 
    
});