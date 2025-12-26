import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button/index.ts';

interface Props {
  addTask: (task: {
    title: string;
    priority: number;
    description: string;
  }) => void;
}

export default function TaskForm({ addTask }: Props) {
  const [title, setTaskTitle] = useState('');
  const [priority, setTaskPriority] = useState(0);
  const [description, setTaskDescription] = useState('');

  const buttonHandler = () => {
    addTask({ title, priority, description });
  };

  const priorityHandler = (priority: string) => {
    setTaskPriority(Number(priority));
  };

  return (
    <View>
      <TextInput
        onChangeText={setTaskTitle}
        placeholder="Enter task title"
        style={styles.userInput}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={priorityHandler}
        placeholder="Enter task priority"
        style={styles.userInput}
      />
      <TextInput
        onChangeText={setTaskDescription}
        placeholder="Enter task description"
        style={styles.userInput}
      />
      <CustomButton title="Add task" onPress={buttonHandler} />
    </View>
  );
}
