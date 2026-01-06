import { View, Text } from 'react-native';
import { styles } from './styles';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Welcome';
import LoginScreen from './Login';
import LogoutScreen from './Logout';

export default function StackNavigationScreen() {
  const Stack = createNativeStackNavigator<SampleStackList>();

  function RootStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <RootStack />;
}
