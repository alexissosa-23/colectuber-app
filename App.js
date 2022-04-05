import React, { Component } from 'react';
import {TextInput,Button, Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import DbaseComponent from './DbaseComponent'
import Register from './Register'
// You can import from local files
// or any pure javascript modules available in npm

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      pass:''
    }
  }
  
  clickme(){
    if((this.state.name == 'admin') && (this.state.pass == 'admin')){
      alert('Login')
    }
    //alert(this.state.name+""+this.state.pass)
  }
  
  
  render() {
    return (
      
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        <DbaseComponent/>
        <Register/>
        <Text>Inicio Sesion</Text>
        <View>
            <TextInput
                  style={{height:50,width:150}}
                  value={this.state.name}
                  placeholder={'User'}
                  onChangeText={(name)=>this.setState({name})}
                  />
        </View>
        <View>
            <TextInput
                  style={{height:50,width:150}}
                  
                  value={this.state.pass}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  onChangeText={(pass)=>this.setState({pass})}
                  />
        </View>
        <View>
          <Button
              color='rgb(255, 127, 39)'
              title={'Iniciar Sesion'}
              onPress={()=>this.clickme()}
          />
      
      </View>
      
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
