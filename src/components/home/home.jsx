import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,Dimensions } from 'react-native';
import AuthService from 'src/services/auth-service';
import ActivationButton from './activation-button';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

const Home = () => {
    return <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
        <Text style={styles.containerText}>
            Home
        </Text>
        </View>
        <View style={[styles.box, styles.box2]}>
        <Text style={styles.containerText}>
            ColectuberApp
        </Text>
        <ActivationButton/>
        </View>
        <View style={[styles.box, styles.box3]}></View>





    </View>
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            flexDirection: 'column',

          },
          box: {
            height: box_height
          },
          box1: {
            flex: 1.2,
            backgroundColor: '#e3aa1a',
            alignItems: 'center',
            justifyContent: 'center',
        },
        //content
        box2: {
            flex: 10,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        //footer
        box3: {
            flex: .5,
            backgroundColor: '#e3aa1a'
        },
        containerText: {
            paddingTop:15,
            fontSize: 20,
            textShadowColor:'#000000'
          },

});
export default Home;