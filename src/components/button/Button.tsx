import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  modifyTask?: boolean;
  title: string;
  onPress: () => void;
}

export default function Button({ modifyTask, title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={modifyTask ? styles.modifyTask : styles.deleteTask}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
