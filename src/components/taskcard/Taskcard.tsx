import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import CustomButton from '../button/Button.tsx';

export default function Taskcard(task: {
  title: string;
  priority: number;
  description: string;
}) {
  return (
    <View>
      <View style={styles.container}>
        <BouncyCheckbox size={20} onPress={() => {}} />
        <Text style={styles.item}>
          {task.title} - {task.priority}
        </Text>
        <CustomButton title="UPDATE" onPress={() => {}} />
        <CustomButton title="DELETE" onPress={() => {}} />
      </View>
    </View>
  );
}
