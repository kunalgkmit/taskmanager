import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Type {
  id: number;
  priorityLevel: string;
}

interface Props {
  setTaskPriority: (priority: string) => void;
}

export default function TaskPriorityButton({ setTaskPriority }: Props) {
  const priorityScale: Type[] = [
    {
      id: 1,
      priorityLevel: 'HIGH',
    },
    {
      id: 2,
      priorityLevel: 'MEDIUM',
    },
    {
      id: 3,
      priorityLevel: 'LOW',
    },
  ];
  const [selectedPriority, setSelectedPriority] = useState(0);
  return (
    <View style={styles.container}>
      {priorityScale.map((item, index) => (
        <TouchableOpacity
          style={styles.touchableOpacity}
          key={index}
          onPress={() => {
            setSelectedPriority(item.id);
            setTaskPriority(item.priorityLevel);
          }}
        >
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedPriority === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.buttonText}>{item.priorityLevel}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
