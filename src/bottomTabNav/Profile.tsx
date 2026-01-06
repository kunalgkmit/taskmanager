import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  const route = useRoute<RouteProp<BottomTabNavTypes, 'Profile'>>();

  console.log('route>>>>', route);
  return (
    <View>
      <Text>
        This is PROFILE SECTION of {route.params?.userName || 'GUEST'}
      </Text>
    </View>
  );
}
