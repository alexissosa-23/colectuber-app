import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
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
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Perfil' component={Perfil} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }else{
    return (
      <Login/>
    );
  }

}