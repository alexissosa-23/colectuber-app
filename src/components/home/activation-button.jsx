import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
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

        init();
    }, []);

    const handleError = (error)=>{
        setError(error.message);
        console.error(error);
    }

    const activate = ()=>{
        setReady(false);
        setError("");
        LocationService.startLocationTracking()
            .then(()=>setActive(true))
            .catch((error)=>handleError(error))
            .finally(()=>setReady(true))
    }

    const deactivate = ()=>{
        setReady(false);
        setError("");
        LocationService.stopLocationTracking()
            .then(()=>setActive(false))
            .catch((error)=>handleError(error))
            .finally(()=>setReady(true))
    }

    const render = ()=>{
        const renderButton = ()=>{
            if(!active){
                return <Button 
                    title='Activate' 
                    onPress={activate}
                    disabled={!(hasPermissions && ready)}
                />
            }else{
                return <Button 
                    title='Deactivate' 
                    onPress={deactivate}
                    disabled={!ready}
                />
            }
        }
        const renderError = ()=>{
            if(error) return <Text>{error}</Text>
        }

        if(loading) return <Text>Loading...</Text>
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