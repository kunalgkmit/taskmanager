import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
