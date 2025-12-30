import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface FABProps {
  onPress: () => void;
}

export default function FloatingActionButton({ onPress }: FABProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}
