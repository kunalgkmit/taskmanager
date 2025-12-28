import { View, Text } from 'react-native';
import { styles } from './styles';

export default function NoTasksToDiaplay() {
  return (
    <View style={styles.container}>
      <Text>No Tasks To Display</Text>
    </View>
  );
}
