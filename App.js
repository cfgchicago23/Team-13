import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import { initFirebaseApp } from './src/utils/firebase';
import { AuthPage } from './src/screens/LoginScreen/LoginScreen';


export default function App() {
  
  return (
   <AuthPage/>
  );
}

export function AppWrapped() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

