import React, { useEffect, useState } from 'react';
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
  const [selectedPriority, setSelectedPriority] = useState(0);

  useEffect(() => {
    if (!priorityToUpdate) return;

    const matchedItem = priorityScale.find(
      item => item.priorityLevel === priorityToUpdate,
    );
    if (matchedItem) {
      setSelectedPriority(matchedItem.id);
    }
  }, [priorityToUpdate]);

  const buttonHandler = (item: PriorityType) => {
    setSelectedPriority(item.id);
    setTaskPriority(item.priorityLevel);
  };

  return (
    <View style={styles.container}>
      {priorityScale.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => buttonHandler(item)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedPriority === item.id ? (
                <View style={styles.radioBg} />
              ) : null}
            </View>
            <Text style={styles.buttonText}>{item.priorityLevel}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
