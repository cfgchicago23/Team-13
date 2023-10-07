import HelpScreen from "./src/screens/HelpScreen/HelpScreen";
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import Education from './src/screens/EducationScreen/EducationScreen';
import { initFirebaseApp } from './src/utils/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthPage } from './src/screens/LoginScreen/LoginScreen';
const app = initFirebaseApp()
const Stack = createNativeStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={ Landing } />
        <Stack.Screen name="Education" component={ Education } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function AppWrapped() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
