import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import Landing from "./src/screens/LandingScreen/LandingScreen";

export default function App() {
  return (
    <Landing />
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

