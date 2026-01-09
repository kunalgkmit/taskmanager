import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';
import { styles } from './styles';

const homeImg = require('../../assets/images/drawerIcons/house-chimney.png');
const settingsImg = require('../../assets/images/drawerIcons/settings-sliders.png');
const aboutImg = require('../../assets/images/drawerIcons/info.png');
const userImg = require('../../assets/images/drawerIcons/circle-user.png');

export default function CustomDrawer({
  state,
  navigation,
}: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.buttonTextWrapper}>
          <Image style={styles.profileImage} source={userImg} />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Kunal Prajapat</Text>
            <Text style={styles.text}>kunal@gmail.com</Text>
          </View>
        </View>
      </View>

      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.drawerItems,
              {
                backgroundColor: isFocused
                  ? COLORS.drawerItemFocus
                  : COLORS.secondary,
              },
            ]}
            onPress={() => navigation.navigate(item.name)}
          >
            <Image
              style={[
                styles.drawerItemIcon,
                {
                  tintColor: isFocused ? COLORS.secondary : COLORS.primary,
                },
              ]}
              source={
                item.name === 'Home'
                  ? homeImg
                  : item.name === 'Settings'
                  ? settingsImg
                  : aboutImg
              }
            />
            <View style={styles.drawerItemTitle}>
              <Text
                style={[
                  styles.itemTitle,
                  {
                    color: isFocused ? COLORS.secondary : COLORS.primary,
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
