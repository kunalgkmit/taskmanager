import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { Task } from '../../types/type';

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
  onUpdatePress: (task: Task) => void;
}

export default function TaskCard({ task, deleteTask, onUpdatePress }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        onPress={(isChecked: boolean) => {
          task.status = isChecked;
        }}
      />
      <Text style={styles.item}>
        {task.title} - {task.priority}
      </Text>

      <CustomButton title="UPDATE" onPress={() => onUpdatePress(task)} />

      <CustomButton title="DELETE" onPress={() => deleteTask(task.taskId)} />
    </View>
  );
}
