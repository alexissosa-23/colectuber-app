import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, StyleSheet } from "@react-navigation/native";
import Home from 'src/components/home/home';
import Login from 'src/components/login/login';
import { AuthProvider, useAuthContext } from 'src/contexts/auth-context-provider'
import Cargando from 'src/components/home/cargando';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from 'src/components/perfil/perfil';
import Menu from 'src/components/menu/menu';
import { color } from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";




export default function App() {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}


const Stack = createBottomTabNavigator();
function AppNavigator() {
  const authContext = useAuthContext();

  if (authContext.loading) return <Cargando />

  if (authContext.isLoggedIn) {
    return (

      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
         initialRouteName='Imbox'
          tabBarOptions={{
            activeTintColor: '#FFF',
            activeBackgroundColor: '#feb72b',
            inactiveTintColor: '#FFF',
            inactiveBackgroundColor: '#527318'//'rgb(0, 97, 37)'
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home} options={{
              title: "Inicio",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" size={size} color={color} />
              )
            }} />


          <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{
              title: "Perfil",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-bus" size={size} color={color} />
              )
            }} />
          <Stack.Screen name="Opciones" component={Menu}
            options={{
              title: "Opciones",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-options" size={size} color={color} />
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  } else {
    return (
      <Login />
    );
  }

}
const MyTheme = {
  // ...DefaultTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 255, 255)',
    //card: 'rgb(254, 97, 37)',
    card: '#527318',
    //text: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',


  },

};

const MyTheme2 = {
  //...DefaultTheme,
  colors: {
    primary: 'rgb(255, 127, 39)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(0, 255, 255)',
    text: 'rgb(0, 0, 0)',

  },
};



