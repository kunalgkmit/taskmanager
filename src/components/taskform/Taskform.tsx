import { Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskPriorityButton } from '../taskPriorityButton';
import { Task } from '../../types/type';

interface TaskProps {
  buttonName: string;
  initialTask?: Task | null;
  onSubmit: (task: Task) => void;
  setShowModal: (visible: boolean) => void;
}

export default function TaskForm({
  initialTask,
  onSubmit,
  setShowModal,
  buttonName,
}: TaskProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setPriority(initialTask.priority);
      setDescription(initialTask.description);
    }
  }, [initialTask]);

  const submitHandler = () => {
    const validateTitle = title.trim() === '';
    const validatePriority = priority === '';
    const validateDescription = description.trim() === '';

    const validateError =
      validateTitle || validatePriority || validateDescription;
    setError(validateError);

    if (!validateError) {
      onSubmit({
        taskId: initialTask ? initialTask.taskId : 0,
        title,
        priority,
        description,
        status: false,
      });
      setShowModal(false);
    }
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        style={styles.userInput}
      />

      <Text>Priority</Text>
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
