import { View, Text } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppBar() {
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
    </View>
  );
}
