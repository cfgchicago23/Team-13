import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import Education from './src/screens/EducationScreen/EducationScreen';
import { initFirebaseApp } from './src/utils/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

export default function AppWrapped() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}




