import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const chatImg = require('../../assets/images/bottomTabIcons/chat.png');
const statusImg = require('../../assets/images/bottomTabIcons/status.png');
const callsImg = require('../../assets/images/bottomTabIcons/call.png');
const profileImg = require('../../assets/images/bottomTabIcons/profile.png');

export default function CustomBottomTab({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: '10%',
        paddingBottom: 18,
        backgroundColor: COLORS.secondary,
      }}
    >
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? COLORS.primary : COLORS.drawerItemFocus;
        const highlightColor = isFocused
          ? COLORS.drawerItemFocus
          : COLORS.secondary;
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.button}
            onPress={() => navigation.navigate(item.name)}
          >
            <View
              style={[
                styles.imageHighlight,
                { backgroundColor: highlightColor },
              ]}
            >
              <Image
                style={[styles.image, { tintColor: color }]}
                source={
                  item.name === 'Tasks'
                    ? chatImg
                    : item.name === 'Status'
                    ? statusImg
                    : item.name === 'Calls'
                    ? callsImg
                    : profileImg
                }
              />
            </View>
            <Text style={[styles.title, { color: color }]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
