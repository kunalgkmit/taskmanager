import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface PriorityType {
  id: number;
  priorityLevel: string;
}

interface TaskFormProps {
  priorityToUpdate: string;
  setTaskPriority: (priority: string) => void;
}

const priorityScale: PriorityType[] = [
  {
    id: 1,
    priorityLevel: 'P1',
  },
  {
    id: 2,
    priorityLevel: 'P2',
  },
  {
    id: 3,
    priorityLevel: 'P3',
  },
];

export default function TaskPriorityButton({
  priorityToUpdate,
  setTaskPriority,
}: TaskFormProps) {
  let idToUpdate: number = 0;
  const tempVar = priorityScale.find(item => {
    if (item.priorityLevel === priorityToUpdate) {
      idToUpdate = item.id;
    }
    return 0;
  });
  const buttonHandler = (item: PriorityType) => {
    setSelectedPriority(item.id);
    {
      setTaskPriority(item.priorityLevel);
    }
  };
  const [selectedPriority, setSelectedPriority] = useState(idToUpdate);

  return (
    <View style={styles.container}>
      {priorityScale.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => buttonHandler(item)}>
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
