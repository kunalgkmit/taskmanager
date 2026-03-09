import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

interface FABProps {
  onPress: () => void;
}

const addTaskImage = require('../../assets/images/addIcon.jpg');

export default function FloatingActionButton({ onPress }: FABProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Image style={styles.image} source={addTaskImage} />
    </TouchableOpacity>
  );
}
