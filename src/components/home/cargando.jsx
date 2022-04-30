import React, { Component, useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const Cargando = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color="#FF7F00" />
            <Text style={styles.containerTexto}>Loading...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    paddingTop:250,
    },
    containerTexto: {
        marginLeft:150,
        fontSize:25,
    }
  });
export default Cargando;