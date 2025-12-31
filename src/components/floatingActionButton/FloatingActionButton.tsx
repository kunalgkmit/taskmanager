import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

interface FABProps {
  onPress: () => void;
}

export default function FloatingActionButton({ onPress }: FABProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../assets/images/addIcon.jpg')}
      />
    </TouchableOpacity>
  );
}
