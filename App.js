import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import Api from './api';

const colectivoId = 3;
let mensaje = "Activar Ubicacion"
let text = 'Waiting..';
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [activo, setAtivo] = useState(false)
  function postUbicacion(){
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
      colectivoId: colectivoId,
      posicionColectivo: {
        latitud: location.coords.latitude,
        longitud: location.coords.longitude
      }
    }
    console.log(datos)

    let res = await Api.post("colectuber/ubicacion", datos)

    })();
  };

  useEffect(() => {
    if (activo) {
      const interval = setInterval(() => {
        postUbicacion();
      }, 2500);
      return () => {
        clearInterval(interval)
      }
    }
  }, [activo])

  function ubicacionActDes() {
    if(!activo){
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
            },
          },
        ],

      )
    }else{
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
            },
          },
        ],

      )
    }

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
