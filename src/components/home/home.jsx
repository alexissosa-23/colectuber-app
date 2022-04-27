import React, { Component,useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';
import ColectuberService from 'src/services/colectuber-service';
import ActivationButton from './activation-button';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;
var meta = 'jgcjgcj';


const Home = () => {



    const authContext = useAuthContext();
    const [loading, setLoading] = useState(true);


    return  <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
            <Text style={styles.containerText}>
                Home
            </Text>
        </View>
        <View style={[styles.box, styles.box2]}>
            <View style={styles.contenedorViaje}>
                <Text style={styles.containerTextViaje}>Viaje:</Text>
                <Text>Conductor: {JSON.stringify(authContext.chofer.nombre)}</Text>
                <Text>Destino: {JSON.stringify(authContext.chofer.apellido)}</Text>
                <Text>Descripcion: {JSON.stringify(authContext.chofer.correo_electronico)}</Text>
            </View>
            <Text style={styles.containerText}>
                ColectuberApp
            </Text>
            <View style={styles.boton}>
            <ActivationButton />
            </View>

            <Button title='Log Out' onPress={authContext.logout} />
        </View>
        <View style={[styles.box, styles.box3]}></View>
    </View>
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
        marginTop:20,
        marginBottom:25,
    },
    //boton Activacion
    boton: {
        marginBottom:25,
        marginTop: 6,
    },
});
export default Home;