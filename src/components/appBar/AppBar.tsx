import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VIEW_MODES } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';

interface AppBarProps {
  title: string;
  showDrawer?: boolean;
  viewMode?: ViewMode;
  filterPress?: () => void;
  sortPress?: () => void;
}

const sortImage = require('../../assets/images/sort.webp');
const filterImage = require('../../assets/images/filter.png');
const drawerImg = require('../../assets/images/drawerIcons/menu-burger.png');
const backImg = require('../../assets/images/drawerIcons/arrow-left.png');

export default function AppBar({
  title,
  showDrawer,
  filterPress,
  sortPress,
  viewMode,
}: AppBarProps) {
  const navigation = useNavigation<DrawerNavProp>();
  const insets = useSafeAreaInsets();

  const topLeftIcon = showDrawer ? drawerImg : backImg;
  const sortIconStyle =
    viewMode === VIEW_MODES.SORT
      ? [styles.selectIcon, styles.icon]
      : [styles.unSelectIcon, styles.icon];

  const filterIconStyle =
    viewMode === VIEW_MODES.FILTER
      ? [styles.selectIcon, styles.icon]
      : [styles.unSelectIcon, styles.icon];

  const appBarStyle = viewMode ? styles.appBarHome : styles.appBarDrawer;

  const getSafeAreaPadding = () => ({
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  });

  const handleLeftIconPress = () => {
    if (showDrawer) {
      navigation.openDrawer();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[appBarStyle, getSafeAreaPadding()]}>
      <View style={styles.drawerWrapper}>
        <TouchableOpacity onPress={handleLeftIconPress}>
          <Image style={[styles.drawerIcon]} source={topLeftIcon} />
        </TouchableOpacity>

        <View style={styles.titleWrapper}>
          <Text style={styles.appTitle}>{title}</Text>
        </View>
      </View>

      {viewMode && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={sortPress}>
            <Image style={sortIconStyle} source={sortImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={filterPress} style={styles.filterButton}>
            <Image style={filterIconStyle} source={filterImage} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
