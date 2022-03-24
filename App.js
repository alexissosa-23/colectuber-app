import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
//import { Button } from 'react-native-web';
import Api from './api';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
/*
 function getUsers(){
    Api.get("users")
      .then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      });
 }
*/

function postUbicacion(){
  if(!location){
   console.log("La ubicacion esta vacia")
   return null
  }
  //let possion = JSON.stringify(location);
 let datos = { colectivoId:3,
      posicionColectivo:{
      latitud:location.coords.latitude,
      longitud:location.coords.longitude
    }
  }
    console.log(datos)
   // return

  Api.post("colectuber/ubicacion",datos)
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  });

}
 function ubicacion(){
  (async () => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  })();

}
  let ubi = 'Click on the button to see their location';
  if (errorMsg) {
    ubi = errorMsg;
  } else if (location) {
    ubi = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <Button
       onPress={ubicacion}
        backgroundColor= '#0000fff'
        title='Ubicacion'
      />
      <Text>{ubi}</Text>
      <Button
       onPress={postUbicacion}
        backgroundColor= '#0000fff'
        title='post_Api'
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

