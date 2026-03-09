import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { TaskModal } from '../taskModal';
import { TaskForm } from '../taskForm';
import FloatingActionButton from '../floatingActionButton';

interface HomeProps {
  isEditMode: boolean;
  initialTask?: Task;
  onSubmit: (task: Task) => void;
  resetEditStates: () => void;
}

export default function AddTaskFormModal({
  initialTask,
  onSubmit,
  resetEditStates,
  isEditMode,
}: HomeProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (initialTask) {
      setShowModal(true);
    }
  }, [initialTask]);

  const handleSubmit = (task: Task) => {
    onSubmit(task);
    setShowModal(false);
  };

  const buttonHandler = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <TaskModal
        modalName={isEditMode ? 'Update Task' : 'Add Task'}
        resetEditStates={resetEditStates}
        initialTask={initialTask}
        showAddTaskFormModal={showModal}
        setShowAddTaskFormModal={setShowModal}
      >
        <TaskForm
          buttonName={isEditMode ? 'Update Task' : 'Add Task'}
          initialTask={initialTask}
          onSubmit={handleSubmit}
          setShowModal={setShowModal}
        />
      </TaskModal>

      <FloatingActionButton onPress={buttonHandler} />
    </View>
  );
}
