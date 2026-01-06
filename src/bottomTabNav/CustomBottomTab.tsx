import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function CustomBottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 80,
      }}
    >
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? 'blue' : 'black';
        return (
          <TouchableOpacity
            key={item.key}
            style={{ alignItems: 'center', gap: 8 }}
            onPress={() => navigation.navigate(item.name)}
          >
            <Image
              style={{ width: 20, height: 20, tintColor: color }}
              source={
                item.name === 'Chats'
                  ? require('../assets/images/bottomTabIcons/chat.png')
                  : item.name === 'Status'
                  ? require('../assets/images/bottomTabIcons/status.png')
                  : item.name === 'Calls'
                  ? require('../assets/images/bottomTabIcons/call.png')
                  : require('../assets/images/bottomTabIcons/profile.png')
              }
            />
            <Text style={{ color: color }}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
