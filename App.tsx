import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';
import CountContextProvider from './src/contexts/CounterContext';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <CountContextProvider> */}
      <Routes />
      {/* </CountContextProvider> */}
    </SafeAreaProvider>
  );
}
