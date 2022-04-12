import React, { Component } from 'react';
import {View, StyleSheet, Image } from 'react-native';

export default class Titulo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/titulo.png")}/>
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
    margin: 20,
    marginRight: 0,
    height: 40,
    width: 195,
  }
});
