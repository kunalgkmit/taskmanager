import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export default function FloatingActionButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
