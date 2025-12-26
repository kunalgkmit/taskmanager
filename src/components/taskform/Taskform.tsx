import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles.ts';
import CustomButton from '../button/Button.tsx';

interface Props {
  addTask: (taskTitle: string, priority: number, description: string) => void;
}

export default function Taskform({ addTask }: Props) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState(0);
  const [taskDescription, setTaskDescription] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={title => setTaskTitle(title)}
        placeholder="Enter task title"
        style={styles.userInput}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={priority => setTaskPriority(Number(priority))}
        placeholder="Enter task priority"
        style={styles.userInput}
      />
      <TextInput
        onChangeText={description => setTaskDescription(description)}
        placeholder="Enter task description"
        style={styles.userInput}
      />
      <CustomButton
        title="Add task"
        onPress={() => addTask(taskTitle, taskPriority, taskDescription)}
      />
    </View>
  );
}
