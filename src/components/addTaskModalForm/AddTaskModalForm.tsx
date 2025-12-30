import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';
import { Task } from '../../types/type';

interface HomeProps {
  buttonTitle: string;
  buttonName: string;
  initialTask?: Task;
  onSubmit: (task: Task) => void;
  resetEditStates: () => void;
  modalName: string;
}

export default function AddTaskFormModal({
  buttonName,
  initialTask,
  onSubmit,
  resetEditStates,
  modalName,
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
    <View>
      <TaskModal
        modalName={modalName}
        resetEditStates={resetEditStates}
        initialTask={initialTask}
        showAddTaskFormModal={showModal}
        setShowAddTaskFormModal={setShowModal}
      >
        <TaskForm
          buttonName={buttonName}
          initialTask={initialTask}
          onSubmit={handleSubmit}
          setShowModal={setShowModal}
        />
      </TaskModal>

      <CustomButton title="Add New Task" onPress={buttonHandler} />
    </View>
  );
}
