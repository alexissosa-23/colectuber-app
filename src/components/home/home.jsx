import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';
import ColectuberService from 'src/services/colectuber-service';
import ActivationButton from './activation-button';
import Cargando from './cargando';
var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;


const Home = () => {

    //Estados
    const authContext = useAuthContext();
    const [loading, setLoading] = useState(true);
    const [viaje, setViaje] = useState(null);


    // obtener viaje al inicio
    useEffect(() => {
        ColectuberService.getViaje()
            .then((viaje) => {
                // stop()
                setViaje(viaje)
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })
    }, []);
    const renderContet = () => {
        if (viaje) {
            return (
            <View>
                <View style={styles.contenedorViaje}>
                    <Text style={styles.containerTextViaje}>Viaje:</Text>
                    <Text>Conductor: {JSON.stringify(authContext.chofer.nombre)} {JSON.stringify(authContext.chofer.apellido)}</Text>
                    <Text>Destino: {viaje.recorrido.nombre}</Text>
                    <Text>Descripcion: {viaje.recorrido.descripcion}</Text>
                </View>

                <View style={styles.boton}>
                    <ActivationButton />
                </View>
                <Button title='Log Out' onPress={authContext.logout} />
            </View>

            )} else {
            return(
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
                <Button title='Log Out' onPress={authContext.logout} />
            </View>
            )}
    }

    if (!loading) {
            return <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <Text style={styles.containerText}>
                        Home
                    </Text>
                </View>
                <View style={[styles.box, styles.box2]}>
                    {renderContet()}
                </View>
                <View style={[styles.box, styles.box3]}></View>
            </View>
    }
        else {
        return <View style={styles.container}>
            <Text style={styles.containerText}>
            </Text>
            <Cargando />
        </View>
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box: {
        height: box_height
    },
    //header
    box1: {
        flex: 1.2,
        backgroundColor: '#e3aa1a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //content
    box2: {
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    //footer
    box3: {
        flex: .5,
        backgroundColor: '#e3aa1a'
    },
    //text
    containerText: {
        paddingTop: 10,
        fontSize: 23,
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

        textShadowColor: '#000000'
    },
    //View viaje
    contenedorViaje: {
        backgroundColor: '#e3aa1a',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        marginBottom: 25,
    },
    //boton Activacion
    boton: {
        marginBottom: 25,
        marginTop: 6,
    },
});
export default Home;