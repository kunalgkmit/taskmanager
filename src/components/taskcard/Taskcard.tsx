import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button/index.ts';

export default function TaskCard(task: {
  title: string;
  priority: number;
  description: string;
  index: number;
  deleteTask: (id: number) => void;
}) {
  const handleDelete = () => {
    task.deleteTask(task.index);
  };

  return (
    <View style={styles.container}>
      <BouncyCheckbox size={20} onPress={() => {}} />
      <Text style={styles.item}>
        {task.title} - {task.priority}
      </Text>
      <CustomButton title="UPDATE" onPress={() => {}} />
      <CustomButton title="DELETE" onPress={handleDelete} />
    </View>
  );
}
