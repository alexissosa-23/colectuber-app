import React, { Component } from 'react';
import {TextInput, Text, Button,View, KeyboardAvoidingView,StyleSheet } from 'react-native';

export default class DbaseComponent extends Component{
  constructor(){
    super()
    this.state={
              name:''
    }
  }
  
  clicked(){
    alert('Hola')
  }
  render(){
    return(
      <View>
      <KeyboardAvoidingView behavior='padding'>
      
      <Text>Colectuber Login</Text>
      </KeyboardAvoidingView>
      </View>
      );
  }
  
}
