import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskDetailsScreen from '../screens/taskDetails/TaskDetails';
import { COLORS } from '../constants/colors';
import { MyTabs } from './BottomTabNav';
import { ROUTES } from '../constants/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.STACK.TABS}
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.STACK.TASK_DETAILS}
        component={TaskDetailsScreen}
      />
    </Stack.Navigator>
  );
}
