import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from "./src/screens/LandingScreen/LandingScreen";
import Education from './src/screens/EducationScreen/EducationScreen';
import Community from "./src/screens/CommunityScreen/CommunityScreen"
import Authenticate from "./src/screens/LoginScreen/LoginScreen"

import { initFirebaseApp } from './src/utils/firebase';




const app = initFirebaseApp()
const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={ Landing } />
        <Stack.Screen name="Education" component={ Education } />
        <Stack.Screen name="Community" component={ Community } />
        <Stack.Screen name="Authenticate" component={ Authenticate } /> 
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




