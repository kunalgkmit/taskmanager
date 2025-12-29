import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskPriorityButton } from '../taskPriorityButton';

interface Props {
  buttonName: string;
  setShowAddTaskFormModal: (visible: boolean) => void;
  titleToUpdate: string;
  descriptionToUpdate: string;
  priorityToUpdate: string;
  addTask: (task: {
    taskId: number;
    title: string;
    priority: string;
    description: string;
  }) => void;
}

export default function TaskForm({
  titleToUpdate,
  descriptionToUpdate,
  priorityToUpdate,
  addTask,
  setShowAddTaskFormModal,
  buttonName,
}: Props) {
  const [title, setTaskTitle] = useState(titleToUpdate);
  const [priority, setTaskPriority] = useState(priorityToUpdate);
  const [description, setTaskDescription] = useState(descriptionToUpdate);
  const [error, setError] = useState(false);
  const taskId = 0;

  const buttonHandler = () => {
    const validateTitle = title.trim() === '';
    const validatePriority = priority.trim() === '';
    const validateDescription = description.trim() === '';
    setError(validateTitle || validatePriority || validateDescription);
    const validateError =
      validateTitle || validatePriority || validateDescription;
    if (!validateError) {
      addTask({ taskId, title, priority, description });
      setShowAddTaskFormModal(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTaskTitle}
        placeholder="Enter task title"
        placeholderTextColor={error ? 'red' : ''}
        style={error ? styles.userInput : styles.errorUserInput}
        value={title}
      />
      <Text style={error ? styles.priorityErrorText : null}>
        Select task Priority
      </Text>
      <TaskPriorityButton
        priorityToUpdate={priority}
        setTaskPriority={setTaskPriority}
      />
      <TextInput
        onChangeText={setTaskDescription}
        placeholder="Enter task description"
        placeholderTextColor={error ? 'red' : ''}
        style={error ? styles.userInput : styles.errorUserInput}
        value={description}
      />
      <CustomButton title={buttonName} onPress={buttonHandler} />
    </View>
  );
}
