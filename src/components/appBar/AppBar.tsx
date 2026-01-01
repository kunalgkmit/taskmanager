import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ViewMode = 'none' | 'filter' | 'sort';

interface FilterProps {
  viewMode: ViewMode;
  filterPress: () => void;
  sortPress: () => void;
}

export default function AppBar({
  filterPress,
  sortPress,
  viewMode,
}: FilterProps) {
  const insets = useSafeAreaInsets();
  const getSafeAreaPadding = () => ({
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  });

  const sortImage = require('../../assets/images/sort.webp');
  const filterImage = require('../../assets/images/filter.png');

  return (
    <View style={[styles.appBar, getSafeAreaPadding()]}>
      <Text style={styles.appTitle}>Task Manager</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={sortPress} style={styles.sortButton}>
          <Image
            style={
              viewMode === 'sort' ? styles.selectIcon : styles.unSelectIcon
            }
            source={sortImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={filterPress} style={styles.filterButton}>
          <Image
            style={
              viewMode === 'filter' ? styles.selectIcon : styles.unSelectIcon
            }
            source={filterImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
