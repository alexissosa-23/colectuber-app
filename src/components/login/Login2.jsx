import React, { Component } from 'react';
import { Button, TextInput, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import BordeSuperior from './BordeSuperior.jsx';
import LogoInicioSesion from './LogoInicioSesion.jsx';
import Titulo from './Titulo.jsx';
//Login
export default class Login extends Component {
  
  constructor() {
    super()
    this.state = {
      name: '',
      pass: ''
    }
  }
 

   clickme() {
   
    if ((this.state.name == 'admin') && (this.state.pass == 'admin')) {
      alert('Se ha iniciado sesion correctamente!!!...')
    }
    else {
      alert('Usuario o Contraseña incorrectos!!!...')
    }
  }
  render() {
    return (

      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
          <BordeSuperior />
          <Titulo />
          <LogoInicioSesion />
          <View>
            <TextInput
              style={{ height: 50, width: 300, borderBottomColor: '#000000', borderBottomWidth: 1, paddingTop: 20, }}
              value={this.state.name}
              placeholder={'Usuario o Correo Electronico '}
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View>
            <TextInput
              style={{ height: 50, width: 300, borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 40, paddingTop: 20, }}
              value={this.state.pass}
              placeholder={'Contraseña'}
              secureTextEntry={true}
              onChangeText={(pass) => this.setState({ pass })}
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.container2}>
        <Button
            style={{ height: 45, width: 200, marginTop: 60}}
            backgroundColor='rgb(255, 127, 39)'
            color='rgb(255, 127, 39)'
            borderColor='rgb(255, 127, 39)'
            borderBottomColor='rgb(0, 127, 39)'
            onPress={() => this.clickme()}
            title='INICIAR SESION'
    
          />
        </View>


      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 90,
    color: '#000000',

  },
  container2: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 200,
    backgroundColor: 'rgb(255, 127, 39)',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    borderRadius: 20,
    borderColor: 'rgb(255, 127, 39)',
    fontSize: 15,

  },

});
