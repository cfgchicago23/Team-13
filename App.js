import { PaperProvider } from 'react-native-paper';
import Landing from "./src/screens/LandingScreen/LandingScreen";
import { initFirebaseApp } from './src/utils/firebase';

const app = initFirebaseApp()

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

