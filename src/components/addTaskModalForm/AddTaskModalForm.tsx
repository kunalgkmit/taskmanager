import { View } from 'react-native';
import React, { useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';

type Task = {
  taskId: number;
  title: string;
  priority: number;
  description: string;
};

interface Props {
  buttonTitle: string;
  buttonName: string;
  initialTask?: Task;
  onSubmit: (task: Task) => void;
}

export default function AddTaskFormModal({
  buttonTitle,
  buttonName,
  initialTask,
  onSubmit,
}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TaskModal
        showAddTaskFormModal={showModal}
        setShowAddTaskFormModal={setShowModal}
      >
        <TaskForm
          buttonName={buttonName}
          initialTask={initialTask}
          onSubmit={onSubmit}
          setShowModal={setShowModal}
        />
      </TaskModal>

      <CustomButton title={buttonTitle} onPress={() => setShowModal(true)} />
    </View>
  );
}
