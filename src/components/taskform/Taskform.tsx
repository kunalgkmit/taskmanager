import { TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';

type Task = {
  taskId: number;
  title: string;
  priority: number;
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
  const [priority, setPriority] = useState(0);
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

  const priorityHandler = (priority: string) => {
    setPriority(Number(priority));
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        style={styles.userInput}
      />

      <TextInput
        value={priority.toString()}
        keyboardType="numeric"
        onChangeText={text => setPriority(Number(text))}
        placeholder="Enter task priority"
        style={styles.userInput}
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
