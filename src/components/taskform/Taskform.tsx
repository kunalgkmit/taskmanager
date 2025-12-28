import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskPriorityButton } from '../taskPriorityButton';

interface Props {
  buttonName: string;
  setShowAddTaskFormModal: (visible: boolean) => void;
  addTask: (task: {
    taskId: number;
    title: string;
    priority: string;
    description: string;
  }) => void;
}

export default function TaskForm({
  addTask,
  setShowAddTaskFormModal,
  buttonName,
}: Props) {
  const [title, setTaskTitle] = useState('');
  const [priority, setTaskPriority] = useState('');
  const [description, setTaskDescription] = useState('');
  const taskId = 0;

  const buttonHandler = () => {
    addTask({ taskId, title, priority, description });
    setShowAddTaskFormModal(false);
  };

  return (
    <View>
      <TextInput
        onChangeText={setTaskTitle}
        placeholder="Enter task title"
        style={styles.userInput}
        defaultValue={title}
      />
      <TaskPriorityButton setTaskPriority={setTaskPriority} />
      <TextInput
        onChangeText={setTaskDescription}
        placeholder="Enter task description"
        style={styles.userInput}
        defaultValue={description}
      />
      <CustomButton title={buttonName} onPress={buttonHandler} />
    </View>
  );
}
