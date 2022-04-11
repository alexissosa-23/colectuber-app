import React, { Component } from 'react';
import { TextInput, Button, Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import AssetExample from './components/AssetExample.js';
import BordeSuperior from './components/BordeSuperior.js';
import LogoInicioSesion from './components/LogoInicioSesion.js';
import Titulo from './components/Titulo.js';
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pass: ''
    }
  }

  clickme() {
    if ((this.state.name == 'admin') && (this.state.pass == 'admin')) {
      alert('Login')
    }
    //alert(this.state.name+""+this.state.pass)
  }


  render() {
    return (

      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        <BordeSuperior/>
          <Titulo />
          <LogoInicioSesion />
          <View>
            <TextInput
              style={{ height: 50, width: 250, borderBottomColor: '#000000', borderBottomWidth: 1, paddingTop:20, }}
              value={this.state.name}
              placeholder={'Correo Electronico '}
              onChangeText={(name) => this.setState({ name })}
              
            />
          </View>
          <View>
            <TextInput
              style={{ height: 50, width: 250, borderBottomColor: '#000000', borderBottomWidth: 1,marginTop:40, paddingTop:20,}}
              value={this.state.pass}
              placeholder={'Contraseña'}
              secureTextEntry={true}
              onChangeText={(pass) => this.setState({ pass })}
            />
          </View>
          <View>

            <button
              onClick={() => this.clickme()}
              style={{
                marginTop:60,
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
                

              }}>
              INICIAR SESION
            </button>
            
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
    backgroundColor: '#ffffff',

  },
  button: {

  },
});
                // <Button
             // color='rgb(255, 127, 39)'
              //title={'Iniciar Sesion'}
              //onPress={() => this.clickme()}

         //   /></View>