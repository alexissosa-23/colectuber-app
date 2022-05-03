import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.bordeSuperior}>
      </View>

      <View style={styles.titulo}>
      <Image style={styles.titulo2} source={require("./assets/titulo.png")}/>
      </View>

      <View style={styles.logo}>
        <Image style={styles.logo2} source={require("./assets/logocolectivo.png")}/>
      </View>

      <View style={styles.correo}>
        <Text>Correo Electronico</Text>
      </View>

      <View style={styles.pass}>
        <Text>Contraseña</Text>
      </View>
      <View style={styles.boton}>
        <Text>Iniciar Sesion</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    // flexDirection: 'column', 
  },
  bordeSuperior: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
  },
  titulo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8%',
    width: '100%',
  },
  titulo2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '80%',
  },
  logo: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%',
  },
  logo2: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '60%',
  },
  correo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    borderColor: '#000',
  },
  pass: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    borderColor: '#000',
  },
  boton: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    borderColor: '#000',
  },
});
