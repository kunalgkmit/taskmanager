import { Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskPriorityButton } from '../taskPriorityButton';
import { useTaskStore } from '../../store/taskStore.ts';
import { useTaskModifyStore } from '../../store/taskModificationStore.ts';

interface TaskProps {
  buttonName: string;
  setShowModal: (visible: boolean) => void;
}

export default function TaskForm({ setShowModal, buttonName }: TaskProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    title: false,
    priority: false,
    description: false,
  });

  const selectedTask = useTaskStore(state => state.selectedTask);
  const isEditMode = useTaskStore(state => state.isEditMode);
  const addTask = useTaskModifyStore(state => state.addTask);
  const updateTask = useTaskModifyStore(state => state.updateTask);

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setPriority(selectedTask.priority);
      setDescription(selectedTask.description);
    }
  }, [selectedTask]);

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
      if (isEditMode && selectedTask) {
        updateTask({
          ...selectedTask,
          title: title,
          description: description,
          priority: priority,
        });
      } else {
        addTask({
          title: title,
          description: description,
          priority: priority,
        });
      }
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
        priorityToUpdate={selectedTask ? selectedTask.priority : ''}
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

      <CustomButton
        title={buttonName}
        onPress={submitHandler}
        modifyTask={true}
      />
    </View>
  );
}
