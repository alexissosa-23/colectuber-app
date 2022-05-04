import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image} from 'react-native';
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
    const [menu, setMenu] = useState(false);


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

//renderizar la ventana en caso de que haya viaje o no
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

    //Perfil del conductor nombre, Apellido, correo
    const perfil =()=>{
        return(
        <View style={{marginTop:15,marginBottom:50, borderColor:'#e3aa1a',borderWidth:3}}>
            <Text style={styles.containerTextViaje}>Perfil:</Text>
                        <Text style={styles.containerTextPerfil}>Nombre: {authContext.chofer.nombre}</Text>
                        <Text style={styles.containerTextPerfil}>Apellido: {authContext.chofer.apellido} </Text>
                        <Text style={styles.containerTextPerfil}>Correo: {authContext.chofer.correo_electronico}</Text>
        </View>
        )
    }

    if (!loading) {
        if (menu) {
            return <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <Text onPress={() => { setMenu(!menu) }} style={{ marginTop: 20, marginLeft:3}}>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require("src/components/home/menu.png")}
                        /></Text>
                    <Text style={styles.containerText}>
                        Menu
                    </Text>
                </View>
                <View style={[styles.box, styles.box2]}>
                    {perfil()}
                    <Button  title='Cerrar Sesión' onPress={authContext.logout} />
                </View>
                <View style={[styles.box, styles.box3]}></View>
            </View>
        } else {
            return <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <Text onPress={() => { setMenu(!menu) }} style={{ marginTop: 20, marginLeft:3 }}>
                        <Image
                            style={{ width: 25, height: 25}}
                            source={require("src/components/home/menu.png")}
                        /></Text>
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
        flex: 1.3,
        flexDirection: 'row',
        backgroundColor: '#e3aa1a',
        //alignItems: 'center',
        // justifyContent: 'center',
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
        marginLeft:3,

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
    containerMenu: {
        margin: 25,

    },
    //todo los text de perfil
    containerTextPerfil: {
        marginLeft:20,
        marginRight:10,
        marginBottom:2,
    },
});
export default Home;