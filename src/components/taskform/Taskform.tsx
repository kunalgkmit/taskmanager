import { Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskPriorityButton } from '../taskPriorityButton';
import { Task } from '../../types/type';

interface TaskProps {
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
}: TaskProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    title: false,
    priority: false,
    description: false,
  });

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
    setErrors({
      title: validateTitle,
      priority: validatePriority,
      description: validateDescription,
    });

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
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        style={styles.userInput}
      />
      {errors.title ? (
        <Text style={styles.errorLabel}>Enter Valid Title</Text>
      ) : null}

      <Text style={styles.priorityLabel}>Priority</Text>
      <TaskPriorityButton
        priorityToUpdate={initialTask ? initialTask.priority : ''}
        setTaskPriority={setPriority}
      />
      {errors.priority ? (
        <Text style={styles.errorPriority}>Select Priority</Text>
      ) : null}

      <Text style={styles.inputLabel}>Description</Text>
      <TextInput
        aria-label=""
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
        style={styles.userInput}
      />
      {errors.description ? (
        <Text style={styles.errorLabel}>Enter Valid Description</Text>
      ) : null}

      {/* {error ? <Text style={styles.errorMessage}>Enter All Fields</Text> : null} */}

      <CustomButton title={buttonName} onPress={submitHandler} />
    </View>
  );
}
