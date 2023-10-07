import HelpScreen from "./src/screens/HelpScreen/HelpScreen";
import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import Education from './src/screens/EducationScreen/EducationScreen';
import Login from './src/screens/LoginScreen/LoginScreen';
import Signup from './src/screens/SignUpScreen/SignUpScreen';
import Auth from './src/screens/AuthScreen/AuthScreen';
import Community from "./src/screens/CommunityScreen/CommunityScreen";
import { initFirebaseApp } from './src/utils/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const app = initFirebaseApp()
const Stack = createNativeStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Community" component={ Community } />
        <Stack.Screen name="Landing" component={ Landing } />
        <Stack.Screen name="Education" component={ Education } />
        <Stack.Screen name="Help" component={ HelpScreen} />
        <Stack.Screen name="Auth" component={ Auth } />
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Signup" component={ Signup } />
        <Stack.Screen name="Community" component={ Community } />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapped() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
