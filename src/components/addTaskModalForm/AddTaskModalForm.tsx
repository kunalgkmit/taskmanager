import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { TaskModal } from '../taskModal';
import { TaskForm } from '../taskForm';
import FloatingActionButton from '../floatingActionButton';
import { useTaskStore } from '../../store/taskStore';

export default function AddTaskFormModal() {
  const [showModal, setShowModal] = useState(false);

  const selectedTask = useTaskStore(state => state.selectedTask);
  const isEditMode = useTaskStore(state => state.isEditMode);

  useEffect(() => {
    if (selectedTask) {
      setShowModal(true);
    }
  }, [selectedTask]);

  const buttonHandler = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <TaskModal
        modalName={isEditMode ? 'Update Task' : 'Add Task'}
        initialTask={selectedTask}
        showAddTaskFormModal={showModal}
        setShowAddTaskFormModal={setShowModal}
      >
        <TaskForm
          buttonName={isEditMode ? 'Update Task' : 'Add Task'}
          setShowModal={setShowModal}
        />
      </TaskModal>

      <FloatingActionButton onPress={buttonHandler} />
    </View>
  );
}
