import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeAlumnos from "./src/Pages/Pantalla_Inicio/HomeAlumnos";
import HomePrincipal from "./src/Pages/Pantalla_Inicio/HomePrincipal";

// Crear el stack
const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePrincipal">
        <Stack.Screen name="HomePrincipal" component={HomePrincipal} options={{ title: 'Inicio' }} />
        <Stack.Screen name="HomeAlumnos" component={HomeAlumnos} options={{ title: 'Alumnos' }} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}


