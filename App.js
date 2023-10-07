import { StatusBar } from 'expo-status-bar';
import { PaperProvider, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import { initFirebaseApp } from './src/utils/firebase';
import { AuthPage } from './src/screens/LoginScreen/LoginScreen';

initFirebaseApp()

function App() {
  return (
    <AuthPage />
  );
}

export default function AppWrapped() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

