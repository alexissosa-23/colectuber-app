import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';

export default function Perfil() {
  const authContext = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={styles.containerTextPerfil}>Nombre:</Text>
      <View style={styles.containerBorde}>
        <View style={styles.container2}>
          <Text style={styles.containerTextPerfil2}>{authContext.chofer.nombre}</Text>
        </View>
      </View>

      <Text style={styles.containerTextPerfil}>Apellido: </Text>
      <View style={styles.containerBorde}>
        <View style={styles.container2}>
          <Text style={styles.containerTextPerfil2}>{authContext.chofer.apellido} </Text>
        </View>
      </View>

      <Text style={styles.containerTextPerfil}>Correo:</Text>
      <View style={styles.containerBorde}>
        <View style={styles.container2}>
          <Text style={styles.containerTextPerfil2}>{authContext.chofer.correo_electronico}</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
   
    
  },
  container2: {
    backgroundColor: "#ffffff",
    //alignItems: "center",
    justifyContent: "center",
    //paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
  
  },
  containerTextPerfil: {
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    
  
  },
  containerTextPerfil2: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom:0,
    fontSize: 15,
    marginTop: 5,
  
  },
  containerBorde: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 25,
    borderColor: '#646464',
    borderWidth: 3,
    borderRadius: 10,
  },
});