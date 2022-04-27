import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: "#ffffff",
    //height: 158,
    //width: 200,
    height: hp('25%'), 
    width: wp('14%') 
  }
});
