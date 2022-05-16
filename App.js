import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from 'src/components/home/home';
import Login from 'src/components/login/login';
import Loading from 'src/components/loading/loading';
import { AuthProvider, useAuthContext } from 'src/contexts/auth-context-provider'
import Cargando from 'src/components/home/cargando';
import Inicio from 'pages/inicio';

import { createDrawerNavigator } from "@react-navigation/drawer";
//import { NavigationContainer } from "@react-navigation/native";
//import "react-native-gesture-handler";



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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Perfil' component={Inicio} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }else{
    return (
      <Login/>
    );
  }

}