import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Api from './api';
import * as Location from "expo-location"
import * as TaskManager from "expo-task-manager"


const TASK_NAME = "BACKGROUND_LOCATION_TASK"
const choferId = 19;
let mensaje = "Activar Ubicacion"
let text = 'Waiting..';
//const [ubicacion, setUbicacion] = useState(null);

TaskManager.defineTask(TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error);
  }
  if (data) {

    let location = await Location.getCurrentPositionAsync({});
    text = JSON.stringify(location);
    let datos = {
      posicionColectivo: {
        latitud: location.coords.latitude,
        longitud: location.coords.longitude
      },
      chofer_id: choferId
    }
    console.log("Post desde el segundo plano ",datos)

  }
});
const isTrackingLocation = async () => {
  let hasStarted = await Location.hasStartedLocationUpdatesAsync(TASK_NAME);
  return hasStarted;
}

const requestPermissionsAsync = async () => {
  const foregroundPermission = await Location.requestForegroundPermissionsAsync();
  if (!foregroundPermission.granted) return false;
  const backgroundPermission = await Location.requestBackgroundPermissionsAsync();
  if (!backgroundPermission.granted) return false;
  return true;
}

const startLocationTracking = async () => {
  let permissions = await requestPermissionsAsync();
  if (!permissions) throw new Error("Permission not granted.");
  if (!TaskManager.isTaskDefined(TASK_NAME)) throw new Error("Task not ready or defined.");
  let hasStarted = await isTrackingLocation();
  if (hasStarted) throw new Error("Tracking already started.")

  await Location.startLocationUpdatesAsync(TASK_NAME, {
    accuracy: Location.Accuracy.BestForNavigation,
    showsBackgroundLocationIndicator: true,
    foregroundService: {
      notificationTitle: "Location",
      notificationBody: "Location tracking in background",
      notificationColor: "#fff",
    }
  });
}
const stopLocationTracking = async () => {
  let hasStarted = await isTrackingLocation();
  if (hasStarted) {
    await Location.stopLocationUpdatesAsync(TASK_NAME);
  } else {
    throw new Error("Tracking not started.")
  }
}


export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [activo, setAtivo] = useState(false)
  const [act, setAct] = useState(false);
  const [ready, setReady] = useState(false);

  // obtener la ubicacion y hacer post
  function postUbicacion() {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        // return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      text = JSON.stringify(location);
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

      let datos = {
        posicionColectivo: {
          latitud: location.coords.latitude,
          longitud: location.coords.longitude
        },
        chofer_id: choferId
      }
      console.log(datos)

      let res = await Api.post("colectuber/ubicacion", datos)

    })();
  };

  // para el intervalo de 2.5 segundos
  useEffect(() => {
    if (activo) {
      const interval = setInterval(() => {
        postUbicacion();
      }, 2000);
      return () => {
        clearInterval(interval)
      }
    }
  }, [activo])

  // para cambiar el estado de activo y el mensaje en el boton
  function ubicacionActDes() {
    if (!activo) {
      Alert.alert(
        'ColectuberApp',
        'Desea activar su Ubicacion',
        [
          {
            text: 'No',
            onPress: () => Alert.alert('No Pressed'),
            style: 'No',
          },
          {
            text: 'Si',
            onPress: () => {
              mensaje = "Desactivar Ubicacion"
              setAtivo(!activo)
              activate()
            },
          },
        ],

      )
    } else {
      Alert.alert(
        'ColectuberApp',
        'Desea desactivar su Ubicacion',
        [
          {
            text: 'No',
            onPress: () => Alert.alert('No Pressed'),
            style: 'No',
          },
          {
            text: 'Si',
            onPress: () => {
              mensaje = "Activar Ubicacion"
              setAtivo(!activo)
              desactivate()
            },
          },
        ],

      )
    }

  }

  const checkTracking = async () => {
    let hasStarted = await isTrackingLocation();
    setAct(hasStarted);
    setReady(true);
  }

  useEffect(() => {
    checkTracking();
  }, []);

  function activate() {
    setReady(false);
    startLocationTracking()
      .then(() => {
        setAct(true);
        console.log("Activated");
      })
      .catch((err) => console.error(err))
      .finally(() => setReady(true))
  }

  function desactivate (){
    setReady(false);
    stopLocationTracking()
      .then(() => {
        setAct(false);
        console.log("Deactivated");
      })
      .catch((err) => console.error(err))
      .finally(() => setReady(true))
  }
  return (
    <View style={styles.container}>
      <Text>ColectuberApp!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          ubicacionActDes()
        }}
        backgroundColor='#0000fff'
        title={mensaje}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

