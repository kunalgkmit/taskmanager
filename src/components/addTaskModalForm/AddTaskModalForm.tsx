import { View } from 'react-native';
import React, { useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';

interface Props {
  addTask: (task: {
    title: string;
    priority: number;
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
      >
        <TaskForm
          addTask={addTask}
          setShowAddTaskFormModal={setShowAddTaskFormModal}
        />
      </TaskModal>
      <CustomButton title={'Add New Task'} onPress={buttonHandler} />
    </View>
  );
}
