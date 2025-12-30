import { View, Text } from 'react-native';
import { styles } from './styles';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appTitle}>Task Manager</Text>
    </View>
  );
}
