import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';

type Task = {
  taskId: number;
  title: string;
  priority: string;
  description: string;
};

interface Props {
  buttonTitle: string;
  buttonName: string;
  initialTask?: Task | null;
  onSubmit: (task: Task) => void;
  onClose: () => void;
}

export default function AddTaskFormModal({
  buttonTitle,
  buttonName,
  initialTask,
  onSubmit,
  onClose,
}: Props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (initialTask) {
      setShowModal(true);
    }
  }, [initialTask]);

  useEffect(() => {
    if (!showModal && initialTask) {
      onClose();
    }
  }, [showModal]);

  const handleSubmit = (task: Task) => {
    onSubmit(task);
    setShowModal(false);
  };

  return (
    <View>
      <TaskModal
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

      <CustomButton title={buttonTitle} onPress={() => setShowModal(true)} />
    </View>
  );
}
