import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Type {
  id: number;
  priorityLevel: string;
}

interface Props {
  priorityToUpdate: string;
  setTaskPriority: (priority: string) => void;
}

const priorityScale: Type[] = [
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
}: Props) {
  console.log('Update>>>>>', priorityToUpdate);
  let idToUpdate: number = 0;
  const tempVar = priorityScale.find(item => {
    if (item.priorityLevel === priorityToUpdate) {
      idToUpdate = item.id;
    }
    return 0;
  });
  const [selectedPriority, setSelectedPriority] = useState(idToUpdate);

  return (
    <View style={styles.container}>
      {priorityScale.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelectedPriority(item.id);
            {
              setTaskPriority(item.priorityLevel);
            }
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
