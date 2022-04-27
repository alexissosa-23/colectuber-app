import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { Component } from 'react';
import {View, StyleSheet, Image } from 'react-native';
//Titulo
export default class Titulo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("src/components/login/icons/titulo.png")}/>
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

    //margin: 20,
   // marginRight: 0,
    margin: hp('5%'),
    marginRight: hp('0%'),
    marginTop: hp('0%'),

    //height: 40,
    //width: 195,
    height: hp('5%'), 
    width: wp('15%')   
  }
});
