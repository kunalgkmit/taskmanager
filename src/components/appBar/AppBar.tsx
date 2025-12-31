import { View, Text } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppBar() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.appBar, { paddingTop: insets.top }]}>
      <Text style={styles.appTitle}>Task Manager</Text>
    </View>
  );
}
