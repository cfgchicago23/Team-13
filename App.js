import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import Landing from "./src/screens/LandingScreen/LandingScreen";

function App() {
  return (
    <Landing />
  );
}

export default function AppWrapped() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

