import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
//import { Button } from 'react-native-web';
import Api from './api';

const colectivoId = 3;

export default function App() {
  const [activo, setAtivo] = useState(false)

  async function postUbicacion() {
    if (Platform.OS === 'android' && !Constants.isDevice) {

      throw 'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      throw 'Permission to access location was denied'
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    let datos = {
      colectivoId: colectivoId,
      posicionColectivo: {
        latitud: location.coords.latitude,
        longitud: location.coords.longitude
      }
    }

    let res = await Api.post("colectuber/ubicacion", datos)
  }

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


  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setAtivo(true)
        }}
        backgroundColor='#0000fff'
        title='Activar Ubicacion'
      />
      <br></br>
      <Button
        onPress={() => {
          setAtivo(false)
        }}
        backgroundColor='#0000fff'
        title='Desactivar Ubicacion'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20',
  },
});

