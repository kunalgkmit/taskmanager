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
  return (
    <View style={[styles.appBar, getSafeAreaPadding()]}>
      <Text style={styles.appTitle}>Task Manager</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={sortPress} style={styles.sortButton}>
          <Image
            style={
              viewMode === 'sort' ? styles.selectIcon : styles.unSelectIcon
            }
            source={require('../../assets/images/sort.webp')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={filterPress} style={styles.filterButton}>
          <Image
            style={
              viewMode === 'filter' ? styles.selectIcon : styles.unSelectIcon
            }
            source={require('../../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
