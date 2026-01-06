import { NavigationProp } from '@react-navigation/native';
import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

declare global {
  interface Task {
    taskId: number;
    title: string;
    priority: string;
    description: string;
    status: boolean;
  }
  type ViewMode = 'none' | 'filter' | 'sort';
  type SampleStackList = {
    Welcome: undefined;
    Login: { name: string; count: number };
    Logout: { message: string };
  };
  type WelcomeNavigationProp = NativeStackScreenProps<SampleStackList>;
  type LoginProps = NativeStackScreenProps<SampleStackList, 'Login'>;
  type LogoutProps = NativeStackScreenProps<SampleStackList, 'Logout'>;

  // used with useNavigation
  type StackNavigation = NativeStackNavigationProp<SampleStackList, 'Logout'>;
}
