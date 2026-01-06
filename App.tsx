import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/home';
import StackNavigationScreen from './src/stackNavigation/parent';
import { MyTabs } from './src/bottomTabNav/Parent';
import WelcomeScreen from './src/bottomTabNav/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
