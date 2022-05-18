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
  // para la autenticacion
  const authContext = useAuthContext();

  // mostrar pantalla carrgando
  if (authContext.loading) return <Cargando />

  /**
   * si el chofer ya se autentico se carga las pantallas para la
  navegacion Home, Perfil, Menu
   *  */
  if (authContext.isLoggedIn) {
    //vista de nevegacion con los Screens Home, Pefil, Menu
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Perfil' component={Perfil} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    // si el chofer no esta autenticado  carga la pantalla Login o si cierra sesion
  } else {
    return (
      <Login />
    );
  }

}