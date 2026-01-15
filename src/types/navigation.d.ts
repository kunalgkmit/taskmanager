import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ROUTES } from '../constants/routes';

declare global {
  type RootStackParamList = {
    [ROUTES.STACK.TABS]: undefined;
    [ROUTES.STACK.TASK_DETAILS]: { task: Task } | undefined;
  };

  // For BOTTOM TAB NAV
  type BottomTabNavTypes = {
    [ROUTES.TABS.TASKS]: undefined;
    [ROUTES.TABS.STATUS]: undefined;
    [ROUTES.TABS.CALLS]: undefined;
    [ROUTES.TABS.PROFILE]: undefined;
  };

  // DRAWER Types
  type DrawerTabTypes = {
    [ROUTES.DRAWER.HOME]: undefined;
    [ROUTES.DRAWER.SETTINGS]: undefined;
    [ROUTES.DRAWER.ABOUT]: undefined;
  };

  // AUTH STACK
  type AuthStackType = {
    [ROUTES.STACK.LOGIN]: undefined;
    [ROUTES.STACK.LOGOUT]: undefined;
    [ROUTES.STACK.DRAWER]: undefined;
  };

  type TabNavigationProp = BottomTabNavigationProp<BottomTabNavTypes>;
  type DrawerNavProp = DrawerNavigationProp<DrawerTabTypes>;
  type StackNavProp = NativeStackNavigationProp<RootStackParamList>;

  type AuthStackProp = NativeStackNavigationProp<AuthStackType>;

  type TaskDetailsProps = RouteProp<
    RootStackParamList,
    ROUTES.STACK.TASK_DETAILS
  >;
}
