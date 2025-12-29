import { Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskPriorityButton } from '../taskPriorityButton';

type Task = {
  taskId: number;
  title: string;
  priority: string;
  description: string;
};

interface Props {
  buttonName: string;
  initialTask?: Task;
  onSubmit: (task: Task) => void;
  setShowModal: (visible: boolean) => void;
}

export default function TaskForm({
  initialTask,
  onSubmit,
  setShowModal,
  buttonName,
}: Props) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setPriority(initialTask.priority);
      setDescription(initialTask.description);
    }
  }, [initialTask]);

  const submitHandler = () => {
    onSubmit({
      taskId: initialTask?.taskId ?? 0,
      title,
      priority,
      description,
    });
    setShowModal(false);
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        style={styles.userInput}
      />

      <Text>Select task Priority</Text>
      <TaskPriorityButton
        priorityToUpdate={initialTask ? initialTask.priority : ''}
        setTaskPriority={setPriority}
      />

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
        style={styles.userInput}
      />

      <CustomButton title={buttonName} onPress={submitHandler} />
    </View>
  );
}
