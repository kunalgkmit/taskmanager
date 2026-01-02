import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VIEW_MODES } from '../../constants/constants';

interface AppBarProps {
  viewMode: ViewMode;
  filterPress: () => void;
  sortPress: () => void;
}

const sortImage = require('../../assets/images/sort.webp');
const filterImage = require('../../assets/images/filter.png');

export default function AppBar({
  filterPress,
  sortPress,
  viewMode,
}: AppBarProps) {
  const insets = useSafeAreaInsets();
  const getSafeAreaPadding = () => ({
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  });

  return (
    <View style={[styles.appBar, getSafeAreaPadding()]}>
      <View style={styles.titleWrapper}>
        <Text style={styles.appTitle}>Task Manager</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={sortPress}>
          <Image
            style={
              viewMode === VIEW_MODES.SORT
                ? [styles.selectIcon, styles.icon]
                : [styles.unSelectIcon, styles.icon]
            }
            source={sortImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={filterPress} style={styles.filterButton}>
          <Image
            style={
              viewMode === VIEW_MODES.FILTER
                ? [styles.selectIcon, styles.icon]
                : [styles.unSelectIcon, styles.icon]
            }
            source={filterImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
