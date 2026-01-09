import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { COLORS } from '../constants/colors';
import CustomDrawer from '../components/customDrawer/CustomDrawer';
import StackNavigator from './StackNav';
import SettingsScreen from '../screens/settings/Settings';
import AboutScreen from '../screens/about/About';
import { ROUTES } from '../constants/routes';

const Drawer = createDrawerNavigator<DrawerTabTypes>();

export default function DrawerTabScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: COLORS.secondary,
        drawerInactiveTintColor: COLORS.secondary,
        headerStatusBarHeight: 2,
        drawerStyle: { backgroundColor: COLORS.primary },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name={ROUTES.DRAWER.HOME} component={StackNavigator} />
      <Drawer.Screen
        name={ROUTES.DRAWER.SETTINGS}
        component={SettingsScreen}
        options={{ swipeEnabled: false }}
      />
      <Drawer.Screen
        name={ROUTES.DRAWER.ABOUT}
        component={AboutScreen}
        options={{ swipeEnabled: false }}
      />
    </Drawer.Navigator>
  );
}
