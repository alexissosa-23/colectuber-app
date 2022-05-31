import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, StyleSheet } from "@react-navigation/native";
import Home from 'src/components/home/home';
import Login from 'src/components/login/login';
import { AuthProvider, useAuthContext } from 'src/contexts/auth-context-provider'
import Cargando from 'src/components/home/cargando';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from 'src/components/perfil/perfil';
import Menu from 'src/components/menu/menu';




export default function App() {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}


const Stack = createDrawerNavigator();
function AppNavigator() {
  const authContext = useAuthContext();

  if (authContext.loading) return <Cargando />

  if(authContext.isLoggedIn){
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Perfil' component={Perfil} />
          <Stack.Screen name="Sesion" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }else{
    return (
      <Login/>
    );
  }

}
const MyTheme = {
  //...DefaultTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 255, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 127, 39)',
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



