import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { Component } from 'react';
import {View, StyleSheet, Image } from 'react-native';
//Borde
export default class BordeSuperior extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("src/components/login/icons/bordesuperior.png")}/>
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
    height: hp('10%'), 
    width: wp('25%')   
    // height:70, 
    //width:320   
  }
});
