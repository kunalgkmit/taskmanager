import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskDetailsScreen from '../screens/taskDetails/TaskDetails';
import { MyTabs } from './BottomTabNav';
import { ROUTES } from '../constants/routes';
import LoginScreen from '../screens/login/Login';
import DrawerTabScreen from './DrawerNav';

const Stack = createNativeStackNavigator<AuthStackType>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.STACK.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.STACK.DRAWER} component={DrawerTabScreen} />
    </Stack.Navigator>
  );
}
