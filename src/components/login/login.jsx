import React,{useState} from 'react';

import { useAuthContext } from 'src/contexts/auth-context-provider';

import { Button,Text, TextInput, View, KeyboardAvoidingView, StyleSheet} from 'react-native';
import BordeSuperior from './BordeSuperior.jsx';
import LogoInicioSesion from './LogoInicioSesion.jsx';
import Titulo from './Titulo.jsx';

const Login = () => {
    const authContext = useAuthContext();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [ready, setReady] = useState(true);


    const login = () => {
        if(!name || !pass){
            return
        }
        setReady(false)
        authContext.login(name, pass)
            .catch(err=>{
                console.error(err);
                //Contrasena o username equivocado o error al autenticar
                setReady(true);
            })
    }

    return (

        <View style={styles.container}>
            <View >
                <Text style={styles.container3}> ejhdeh</Text>
            </View>
            <KeyboardAvoidingView behavior='padding'>
                <Titulo />
                <LogoInicioSesion />
                <View>
                    <TextInput
                        style={{ height: 50, width: 300, borderBottomColor: '#000000', borderBottomWidth: 1, paddingTop: 20, }}
                        value={name}
                        placeholder={'Usuario o Correo Electronico '}
                        onChangeText={newName => setName(newName)}
                    />
                </View>
                <View>
                    <TextInput
                        style={{ height: 50, width: 300, borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 40, paddingTop: 20, }}
                        value={pass}
                        placeholder={'Contraseña'}
                        secureTextEntry={true}
                        onChangeText={newPass => setPass(newPass)}
                    />
                </View>
            </KeyboardAvoidingView>

            <View style={styles.container2}>
                <Button
                    disabled = {!ready}
                    style={{ height: 45, width: 200, marginTop: 60 }}
                    backgroundColor='rgb(255, 127, 39)'
                    color='rgb(255, 127, 39)'
                    borderColor='rgb(255, 127, 39)'
                    borderBottomColor='rgb(0, 127, 39)'
                    onPress={login}
                    title='INICIAR SESION'

                />
            </View>


        </View>

    )


}


const styles = StyleSheet.create({
    container: {
        marginTop:25,
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      paddingBottom: 90,
      paddingLeft:30,
      paddingRight:30,
     // color: '#000000',

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
    container3: {
        flexDirection:"column",
        backgroundColor:'#000000',
        flexBasis:60,
        paddingLeft: 200,
        paddingRight:200,

    },

  });


export default Login;
