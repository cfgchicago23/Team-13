import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import { initFirebaseApp } from './src/utils/firebase';

initFirebaseApp()

export default function App() {
  return (
    <PaperProvider>
        
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

