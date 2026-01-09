import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import StatusScreen from '../screens/status/Status';
import CallScreen from '../screens/calls/Calls';
import ProfileScreen from '../screens/profile/Profile';
import CustomBottomTab from '../components/customBottomTab/CustomBottomTab';
import { ROUTES } from '../constants/routes';

const Tab = createBottomTabNavigator<BottomTabNavTypes>();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomBottomTab {...props} />}
    >
      <Tab.Screen name={ROUTES.TABS.TASKS} component={Home} />
      <Tab.Screen name={ROUTES.TABS.STATUS} component={StatusScreen} />
      <Tab.Screen name={ROUTES.TABS.CALLS} component={CallScreen} />
      <Tab.Screen name={ROUTES.TABS.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
