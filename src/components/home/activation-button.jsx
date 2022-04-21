import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
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
            .catch(err=>console.error(err));
    }, []);

    const handleError = (error) => {
        setError(error.message);
        console.error(error);
    }

    const activate = () => {
        setReady(false);
        setError("");
        LocationService.startLocationTracking()
            .then(() => setActive(true))
            .catch((error) => handleError(error))
            .finally(() => setReady(true))
    }

    const deactivate = () => {
        setReady(false);
        setError("");
        LocationService.stopLocationTracking()
            .then(() => setActive(false))
            .catch((error) => handleError(error))
            .finally(() => setReady(true))
    }

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

    const render = () => {
        const renderButton = () => {
            if (!active) {
                return <Button
                    title='Activate Location'
                    onPress={()=>{
                        confirmAction("Colectuber-App", "Desea activar su ubicacion", activate);
                    }}
                    disabled={!(hasPermissions && ready)}
                />
            } else {
                return <Button
                    title='Deactivate Location'
                    onPress={()=>{
                        confirmAction( "Colectuber-App", "Desea desactivar su ubicacion", deactivate);
                    }}
                    disabled={!ready}
                />
            }
        }
        
        const renderError = () => {
            if (error) return <Text>{error}</Text>
        }

        if (loading) return <Text>Loading...</Text>
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