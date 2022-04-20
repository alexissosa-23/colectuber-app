import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from 'src/components/home/home';
import Login from 'src/components/login/login';
import Loading from 'src/components/loading/loading';
import { AuthProvider, useAuthContext } from 'src/contexts/auth-context-provider';
//Prueba
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}

const Stack = createNativeStackNavigator();
function AppNavigator() {
  const authContext = useAuthContext();

  if(authContext.loading) return <Loading/>

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        {authContext.isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}