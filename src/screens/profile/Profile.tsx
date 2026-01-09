import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import AppBar from '../../components/appBar';

export default function ProfileScreen() {
  const route = useRoute<RouteProp<BottomTabNavTypes>>();
  return (
    <View>
      <AppBar title="Profile" showDrawer={true} />
      <Text>This is PROFILE SECTION!</Text>
    </View>
  );
}
