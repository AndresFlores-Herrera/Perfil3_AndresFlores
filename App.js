import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentInfoScreen from './src/screens/StudentInfoScreen';
import ApiDataScreen from './src/screens/ApiDataScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="StudentInfo"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1A1A1A',
          },
          headerTintColor: '#33CCFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="StudentInfo" 
          component={StudentInfoScreen} 
          options={{ title: 'Perfil del Estudiante' }} 
        />
        <Stack.Screen 
          name="ApiData" 
          component={ApiDataScreen} 
          options={{ title: 'Personajes de Rick & Morty' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
