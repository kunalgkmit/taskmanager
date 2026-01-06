import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/home';
import StackNavigationScreen from './src/stackNavigation/parent';

export default function App() {
  return (
    <SafeAreaProvider>
      <StackNavigationScreen />
      {/* <Home /> */}
    </SafeAreaProvider>
  );
}
