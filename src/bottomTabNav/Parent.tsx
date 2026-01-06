import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatusScreen from './Status';
import {
  NavigationContainer,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import ChatScreen from './Chat';
import CallScreen from './Calls';
import ProfileScreen from './Profile';
import { Image } from 'react-native';
import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator<BottomTabNavTypes>();

export const MyTabs = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Tabs'>>();
  console.log('route in tab', route);
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 75,
        },
        tabBarBadgeStyle: {
          backgroundColor: 'red',
        },
      }}
      tabBar={props => <CustomBottomTab {...props} />}
    >
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ height: size, width: size, tintColor: color }}
                source={require('../assets/images/bottomTabIcons/chat.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ height: size, width: size, tintColor: color }}
                source={require('../assets/images/bottomTabIcons/status.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calls"
        component={CallScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ height: size, width: size, tintColor: color }}
                source={require('../assets/images/bottomTabIcons/call.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ userName: route.params?.userName }}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ height: size, width: size, tintColor: color }}
                source={require('../assets/images/bottomTabIcons/profile.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
