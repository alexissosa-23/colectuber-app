
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
//Borde
export default class BordeSuperior extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/bordesuperior.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('10%'), 
    width: wp('90%') 
  },
  logo: {
    backgroundColor: "#ffffff", 
    height: 70,
    width: 320,
  }
});