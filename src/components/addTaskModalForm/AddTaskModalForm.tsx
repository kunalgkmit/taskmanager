import { View } from 'react-native';
import React, { useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';
import { styles } from './styles';
import FloatingActionButton from '../floatingActionButton/FloatingActionButton';

interface Props {
  addTask: (task: {
    taskId: number;
    title: string;
    priority: string;
    description: string;
  }) => void;
}

export default function AddTaskFormModal({ addTask }: Props) {
  const [showAddTaskFormModal, setShowAddTaskFormModal] = useState(false);
  const buttonHandler = () => {
    setShowAddTaskFormModal(true);
  };

  return (
    <View>
      <TaskModal
        showAddTaskFormModal={showAddTaskFormModal}
        setShowAddTaskFormModal={setShowAddTaskFormModal}
        modalName="Add Task"
      >
        <TaskForm
          titleToUpdate=""
          priorityToUpdate=""
          descriptionToUpdate=""
          addTask={addTask}
          setShowAddTaskFormModal={setShowAddTaskFormModal}
          buttonName="Add Task"
        />
      </TaskModal>
      <View style={styles.button}>
        <FloatingActionButton title={'Add'} onPress={buttonHandler} />
      </View>
    </View>
  );
}
