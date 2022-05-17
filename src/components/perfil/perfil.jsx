import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuthContext } from 'src/contexts/auth-context-provider';

  export default function Perfil() {
    const authContext = useAuthContext();

    return (
      <View style={styles.container}>
        <View style={styles.containerBorde}>
            <View style={styles.container2}>
                <Text style={styles.containerTextViaje}>Perfil:</Text>
                <Text style={styles.containerTextPerfil}>Nombre: {authContext.chofer.nombre}</Text>
                <Text style={styles.containerTextPerfil}>Apellido: {authContext.chofer.apellido} </Text>
                <Text style={styles.containerTextPerfil}>Correo: {authContext.chofer.correo_electronico}</Text>
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
      justifyContent:"center",
      paddingTop:15,
      paddingBottom: 15,
      paddingLeft:5,
      borderRadius:10,
    },
    containerTextPerfil: {
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 2,
    },
    containerBorde: {
        marginRight:15,
        marginLeft:15,
        marginTop: 25,
        borderColor:'#646464',
        borderWidth: 3,
        borderRadius:10,

    },
  });