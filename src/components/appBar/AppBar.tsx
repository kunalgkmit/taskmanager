import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface FilterProps {
  filterMode: boolean;
  sortMode: boolean;
  filterPress: () => void;
  sortPress: () => void;
}

export default function AppBar({
  filterMode,
  filterPress,
  sortMode,
  sortPress,
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
            style={sortMode ? styles.selectIcon : styles.unSelectIcon}
            source={require('../../assets/images/sort.webp')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={filterPress} style={styles.filterButton}>
          <Image
            style={filterMode ? styles.selectIcon : styles.unSelectIcon}
            source={require('../../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
