import React, { Component } from 'react';
import {View, StyleSheet, Image } from 'react-native';
//Logo
export default class LogoInicioSesion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("src/components/login/icons//logocolectivo.png")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#ffffff",
    height: 158,
    width: 200,
  }
});
