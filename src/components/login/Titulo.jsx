import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
//Titulo  <Image style={styles.logo} source={require("src/components/login/icons/titulo.png")}/>
export default class Titulo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "black" }} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row'
  },

  logo: {
    backgroundColor: "#ffffff",

    //height: 40,
    //width: 195,
  //  margin:  hp('2%'),
    height: hp('10%'), 
    width: wp('25%') 
  }
});
