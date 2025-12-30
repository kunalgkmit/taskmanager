import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';
import { Task } from '../../types/type';

interface HomeProps {
  buttonTitle: string;
  buttonName: string;
  initialTask?: Task | null;
  onSubmit: (task: Task) => void;
  resetEditStates: () => void;
}

export default function AddTaskFormModal({
  buttonTitle,
  buttonName,
  initialTask,
  onSubmit,
  resetEditStates,
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

      <CustomButton title={buttonTitle} onPress={buttonHandler} />
    </View>
  );
}
