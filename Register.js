import React, { Component } from 'react';
import { TextInput, Text, Button, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default class Register extends Component {
    constructor() {
        super()
        this.state = { name: '' }
    }

    render() {
        return (
            <View>
                <Text>Registro</Text>
                <View>
               
                    <TextInput
                        style={{ height: 50, width: 150 }}
                        value={this.state.name}
                        placeholder={'User'}
                        onChangeText={(name) => this.setState({ name })}
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
            <TextInput
                  style={{height:50,width:150}}
                  
                  value={this.state.confirmpass}
                  placeholder={'Confirm Password'}
                  secureTextEntry={true}
                  onChangeText={(pass)=>this.setState({pass})}
                  />
        </View>
        <View>
          <Button
              color='rgb(255, 127, 39)'
              title={'Registrarse'}
              onPress={()=>this.clickme()}
          />
      
      </View>
            </View>
        );
    }

}
