import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import LocationService from 'src/services/location-service';


const ActivationButton = () => {
    //Estados
    const [loading, setLoading] = useState(true);
    const [hasPermissions, setPermissions] = useState(false);

    const [active, setActive] = useState(false);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const init = async () => {
            //Pedir permisos
            let permissions = await LocationService.requestPermissions();
            setPermissions(permissions);

            //Controlar si el servicio esta corriendo
            let hasStarted = await LocationService.isTrackingLocation();
            setActive(hasStarted);

            setReady(true);
            setLoading(false);
        }

        init()
            .catch(err => console.error(err));
    }, []);


    //manejar el error
    const handleError = (error) => {
        setError(error.message);
        console.error(error);
    }

    //activar la ubicacion al hacer clic
    const activate = () => {
        setReady(false);
        setError("");
        LocationService.startLocationTracking()
            .then(() => setActive(true))
            .catch((error) => handleError(error))
            .finally(() => setReady(true))
    }


    //desactivar la ubicacion al hacer clic
    const deactivate = () => {
        setReady(false);
        setError("");
        LocationService.stopLocationTracking()
            .then(() => setActive(false))
            .catch((error) => handleError(error))
            .finally(() => setReady(true))
    }

    //Mensaje de confirmacion al apretar el boton de Activar o desactivar
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

    const render = () => {
        const renderButton = () => {
            if (!active) {


                return <TouchableOpacity
                    alignItems= 'center'
                    color='#FF7F27'
                    title='Activar Ubicacion'
                    onPress={() => {
                        confirmAction("Colectuber-App", "Desea activar su ubicacion", activate);
                    }}
                    disabled={!(hasPermissions && ready)}
                >
                    <Text
                     style={{
                        textAlign: 'center',
                        backgroundColor: 'rgb(255, 127, 39)',
                        width: 200,
                        height: 45,
                        fontSize: 15,
                        color: 'rgb(255, 255, 255)',
                        borderRadius: 20,
                        paddingTop: 10,
                
                    }}
                    >ACTIVAR UBICACION</Text>
                </TouchableOpacity>


            } else {
                return <TouchableOpacity
                    alignItems= 'center'
                    color='#FF7F27'
                    title='Desactivar Ubicacion'
                    onPress={() => {
                        confirmAction("Colectuber-App", "Desea desactivar su ubicacion", deactivate);
                    }}
                    disabled={!ready}
                >
                    <Text
                    style={{
                    
                        textAlign: 'center',
                        backgroundColor: 'rgb(255, 127, 39)',
                        width: 200,
                        height: 45,
                        fontSize: 15,
                        color: 'rgb(255, 255, 255)',
                        borderRadius: 20,
                        paddingTop: 10,
                
                    }}
                    >DESACTIVAR UBICACION</Text>
                </TouchableOpacity>
            }
        }

        const renderError = () => {
            if (error) return <Text>{error}</Text>
        }

        if (loading) return <Button disabled={true} title="Loading..." />
        return <>
            {renderButton()}
            {renderError()}
        </>
    }

    return (
        <View>
            {render()}
        </View>
    );
}


export default ActivationButton;

