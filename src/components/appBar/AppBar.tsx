import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface FilterProps {
  filterMode: boolean;
  filterPress: () => void;
}

export default function AppBar({ filterPress, filterMode }: FilterProps) {
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
        <TouchableOpacity onPress={filterPress} style={styles.sortButton}>
          <Image
            style={filterMode ? styles.selectIcon : styles.unSelectIcon}
            source={require('../../assets/images/sort.webp')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
